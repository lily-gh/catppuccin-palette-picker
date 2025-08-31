<script lang="ts">
    import { catppuccinColors, type Flavor, type Format } from "./colors";

    let { flavor = $bindable(), format = $bindable() } = $props<{
        flavor: Flavor;
        format: Format;
    }>();
</script>

<div class="flex gap-2">
    <select
        bind:value={flavor}
        class="flex-1 p-1 rounded border"
        style="background-color: var(--vscode-input-background); 
            color: var(--vscode-input-foreground);
            border-color: var(--vscode-input-border, var(--vscode-contrastBorder));"
    >
        {#each Object.entries(catppuccinColors) as [key, flavorData]}
            <option value={key}>{flavorData.name}</option>
        {/each}
    </select>

    <select
        bind:value={format}
        class="w-16 p-1 rounded border"
        style="background-color: var(--vscode-input-background); 
            color: var(--vscode-input-foreground);
            border-color: var(--vscode-input-border, var(--vscode-contrastBorder));"
    >
        <option value="hex">HEX</option>
        <option value="rgb">RGB</option>
        <option value="hsl">HSL</option>
    </select>
</div>
