<script lang="ts">
    import ColorCard from "./ColorCard.svelte";
    import { getColorValue, type ColorValue, type Format } from "./colors";

    let { colors, format, onCopy } = $props<{
        colors: Record<string, ColorValue>;
        format: Format;
        onCopy: (text: string) => void;
    }>();
</script>

<div class="flex flex-col gap-2 overflow-auto max-h-[calc(100vh-120px)] pr-1">
    {#each Object.entries(colors) as [name, colorValue] (name)}
        <ColorCard 
            {name} 
            value={getColorValue(colorValue as ColorValue, format)}
            backgroundColor={(colorValue as ColorValue).hex}
            {onCopy} 
        />
    {/each}
</div>
