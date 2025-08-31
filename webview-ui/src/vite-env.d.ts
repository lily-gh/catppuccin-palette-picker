/// <reference types="svelte" />
/// <reference types="vite/client" />

// VS Code Webview API types
interface VSCodeAPI {
    postMessage(message: any): void;
    getState(): any;
    setState(state: any): void;
}

declare global {
    interface Window {
        vscode?: VSCodeAPI;
    }
}

export {};
