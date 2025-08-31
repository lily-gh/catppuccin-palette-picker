<script lang="ts">
  import Header from './lib/Header.svelte';
  import PaletteList from './lib/PaletteList.svelte';
  import { catppuccinColors, type Flavor, type Format } from './lib/colors';

  // --- state ---
  let selectedFlavor: Flavor = $state('mocha');
  let selectedFormat: Format = $state('hex');

  // --- derived ---
  let currentPalette = $derived(catppuccinColors[selectedFlavor]);

  // --- methods ---
  function handleCopy(text: string) {
    console.log("Copying to clipboard:", text);
    (window as any).vscode?.postMessage({ command: 'copy', text });
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
    colors={currentPalette.colors}
    format={selectedFormat}
    onCopy={handleCopy}
  />
</main>

<style>
  main {
    width: 100%;
  }
</style>
