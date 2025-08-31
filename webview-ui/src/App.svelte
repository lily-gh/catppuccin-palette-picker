<script lang="ts">
  import Header from './lib/Header.svelte';
  import PaletteList from './lib/PaletteList.svelte';
  import { catppuccinColors, type Flavor, type Format } from './lib/colors';

  // --- state ---
  let selectedFlavor: Flavor = $state('mocha');
  let selectedFormat: Format = $state('hex');

  // --- derived ---
  let currentPalette = $derived(catppuccinColors[selectedFlavor]);
  let currentColors = $derived(currentPalette.colors);

  // Debug logging
  $effect(() => {
    console.log('App: selectedFlavor changed to:', selectedFlavor);
    console.log('App: currentPalette is:', currentPalette.name);
  });

  // --- methods ---
  function handleCopy(name: string, value: string) {
    // Copy to clipboard
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(() => {
        // Post message to VS Code extension
        if (window.vscode) {
          window.vscode.postMessage({
            command: 'copy',
            name: name,
            value: value
          });
        }
      }).catch((err) => {
        console.error('Failed to copy to clipboard:', err);
        // Fallback: still try to show VS Code toast even if clipboard fails
        if (window.vscode) {
          window.vscode.postMessage({
            command: 'copy',
            name: name,
            value: value
          });
        }
      });
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = value;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        // Post message to VS Code extension
        if (window.vscode) {
          window.vscode.postMessage({
            command: 'copy',
            name: name,
            value: value
          });
        }
      } catch (err) {
        console.error('Fallback copy failed:', err);
      }
      document.body.removeChild(textArea);
    }
  }
</script>

<main class="flex flex-col gap-3 p-3 text-sm font-sans 
            text-[var(--vscode-editor-foreground)] 
            bg-[var(--vscode-sideBar-background)] 
            w-full h-full min-h-screen overflow-hidden">
  <Header
    bind:flavor={selectedFlavor}
    bind:format={selectedFormat}
  />
  <PaletteList
    colors={currentColors}
    format={selectedFormat}
    onCopy={handleCopy}
  />
</main>

<style>
  main {
    width: 100%;
  }
</style>
