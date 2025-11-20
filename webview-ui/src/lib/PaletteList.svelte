<script lang="ts">
    import ColorCard from "./ColorCard.svelte";
    import { getColorValue, type ColorValue, type Format } from "./colors";
    import { flip } from "svelte/animate";
    import { quintOut } from "svelte/easing";

    let { colors, format, onCopy, favorites = new Set(), onToggleFavorite } = $props<{
        colors: Record<string, ColorValue>;
        format: Format;
        onCopy: (name: string, value: string) => void;
        favorites?: Set<string>;
        onToggleFavorite?: (name: string) => void;
    }>();

    // Sort colors: favorites first, then the rest
    const sortedColors = $derived.by(() => {
        const colorEntries = Object.entries(colors);
        
        const favoriteColors = colorEntries.filter(([name]) => favorites.has(name));
        const regularColors = colorEntries.filter(([name]) => !favorites.has(name));
        
        return [...favoriteColors, ...regularColors];
    });
</script>

<div class="flex flex-col gap-2 overflow-auto max-h-[calc(100vh-120px)] pr-1">
    {#each sortedColors as [name, colorValue] (`${name}-${(colorValue as ColorValue).hex}`)}
        <div animate:flip={{ duration: 400, easing: quintOut }}>
            <ColorCard 
                {name} 
                value={getColorValue(colorValue as ColorValue, format)}
                backgroundColor={(colorValue as ColorValue).hex}
                {onCopy}
                isFavorite={favorites.has(name)}
                {onToggleFavorite}
            />
        </div>
    {/each}
</div>
