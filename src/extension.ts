// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Track the current panel with a webview
  let panel: vscode.WebviewPanel | undefined = undefined;

  
  context.subscriptions.push(
    // Register a webview view provider for the sidebar
    vscode.window.registerWebviewViewProvider(
      'catppuccinPaletteSidebar',
      new CatppuccinSidebarProvider(context)
    ),


    vscode.commands.registerCommand('catppuccinPalette.openCatppuccinPalette', () => {
      const columnToShowIn = vscode.window.activeTextEditor
        ? vscode.window.activeTextEditor.viewColumn
        : undefined;

      if (panel) {
        // If we already have a panel, show it in the target column
        panel.reveal(columnToShowIn);
      } else {
        // Create and show a new webview
        panel = vscode.window.createWebviewPanel(
          'catppuccinPalette', // Identifies the type of the webview. Used internally
          'Catppuccin Palette', // Title of the panel displayed to the user
          columnToShowIn || vscode.ViewColumn.One, // Editor column to show the new webview panel in.
          {} // Webview options. More on these later.
        );

        // And set its HTML content
        panel.webview.html = getWebviewContent();



        panel.onDidDispose(
          () => {
            // When the panel is closed, cancel any future updates to the webview content
            // stop updating stuff etc
          },
          null,
          context.subscriptions
        );
      }
    })

  );


  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "catppuccinPalette" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  const disposable = vscode.commands.registerCommand('catppuccinPalette.activateCatppuccinPalette', () => {
    // The code you place here will be executed every time your command is executed
    // Display a message box to the user
    vscode.window.showInformationMessage('Hi from Catppuccin Palette!');
  });

  context.subscriptions.push(disposable);
}

function getWebviewContent() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cat Coding</title>
</head>
<body>
    <img src="https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif" width="300" />
</body>
</html>`;
}

class CatppuccinSidebarProvider implements vscode.WebviewViewProvider {
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
        await vscode.env.clipboard.writeText(msg.text);
        vscode.window.showInformationMessage(`Copied: ${msg.text}`);
      }
    });
  }
}

// This method is called when your extension is deactivated
export function deactivate() { }
