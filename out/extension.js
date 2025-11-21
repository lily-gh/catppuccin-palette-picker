"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = __importStar(require("vscode"));
const path = __importStar(require("path"));
const fs = __importStar(require("fs"));
// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
function activate(context) {
    context.subscriptions.push(
    // Register a webview view provider for the sidebar
    vscode.window.registerWebviewViewProvider('catppuccinPaletteSidebar', new CatppuccinPalettePickerSidebarProvider(context)), vscode.commands.registerCommand('catppuccinPalette.activateCatppuccinPalettePicker', () => {
        // Focus on the sidebar view
        vscode.commands.executeCommand('catppuccinPaletteSidebar.focus');
    }));
}
class CatppuccinPalettePickerSidebarProvider {
    context;
    constructor(context) {
        this.context = context;
    }
    resolveWebviewView(webviewView, context, _token) {
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [
                vscode.Uri.file(path.join(this.context.extensionPath, 'media'))
            ]
        };
        const htmlPath = path.join(this.context.extensionPath, 'media', 'index.html');
        let html = fs.readFileSync(htmlPath, 'utf8');
        html = html.replace(/(src|href)="(.+?)"/g, (_, attr, file) => {
            const resource = vscode.Uri.file(path.join(this.context.extensionPath, 'media', file));
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
function deactivate() { }
//# sourceMappingURL=extension.js.map