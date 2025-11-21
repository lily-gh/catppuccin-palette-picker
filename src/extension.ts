// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    // Register a webview view provider for the sidebar
    vscode.window.registerWebviewViewProvider(
      'catppuccinPaletteSidebar',
      new CatppuccinPalettePickerSidebarProvider(context)
    ),

    vscode.commands.registerCommand('catppuccinPalette.activateCatppuccinPalettePicker', () => {
      // Focus on the sidebar view
      vscode.commands.executeCommand('catppuccinPaletteSidebar.focus');
    })
  );
}

class CatppuccinPalettePickerSidebarProvider implements vscode.WebviewViewProvider {
  constructor(private readonly context: vscode.ExtensionContext) {}

  resolveWebviewView(
    webviewView: vscode.WebviewView,
    context: vscode.WebviewViewResolveContext,
    _token: vscode.CancellationToken
  ) {
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [
        vscode.Uri.file(path.join(this.context.extensionPath, 'media'))
      ]
    };

    const htmlPath = path.join(
      this.context.extensionPath,
      'media',
      'index.html'
    );
    let html = fs.readFileSync(htmlPath, 'utf8');

    html = html.replace(/(src|href)="(.+?)"/g, (_, attr, file) => {
      const resource = vscode.Uri.file(
        path.join(this.context.extensionPath, 'media', file)
      );
      return `${attr}="${webviewView.webview.asWebviewUri(resource)}"`;
    });

    webviewView.webview.html = html;

    webviewView.webview.onDidReceiveMessage(async (msg) => {
      if (msg.command === 'copy') {
        // Copy to clipboard using VS Code's clipboard API (this is more reliable in the extension context)
        await vscode.env.clipboard.writeText(msg.value);
      }
    });
  }
}

// This method is called when your extension is deactivated
export function deactivate() { }
