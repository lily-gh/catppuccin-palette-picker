# Webview UI

This directory contains the Svelte-based webview UI for the Catppuccin Palette Picker VS Code extension.

## Overview

The webview provides an interactive color palette picker for all four Catppuccin flavors (Latte, Frappé, Macchiato, and Mocha), allowing users to browse and copy color values in HEX, RGB and HSL formats.

## Features

- **4 Catppuccin Flavors**: Switch between Latte, Frappé, Macchiato, and Mocha themes
- **Multiple Color Formats**: View and copy colors in HEX, RGB, or HSL formats
- **One-Click Copy**: Click any color to copy its value to the clipboard

## Tech Stack

- **Svelte 5** - Reactive UI framework with runes
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **VS Code Webview API** - Extension communication

## Development

### Install Dependencies

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

## How It Works

1. The Svelte app is built using `npm run build`
2. Vite compiles and bundles everything into `../media/index.html`, `index.js`, and `index.css`
3. The VS Code extension (`extension.ts`) loads `media/index.html` into the webview
4. The webview communicates with the extension via `postMessage` API to trigger clipboard operations.

## VS Code Integration

The app uses the VS Code Webview API to communicate with the extension:

```typescript
window.vscode.postMessage({
  command: 'copy',
  name: colorName,
  value: colorValue
});
```

The extension handles these messages and shows native VS Code notifications.
