<script lang="ts">
    let { name, value, backgroundColor, onCopy, isFavorite = false, onToggleFavorite } = $props<{
        name: string;
        value: string;
        backgroundColor?: string;
        onCopy: (name: string, value: string) => void;
        isFavorite?: boolean;
        onToggleFavorite?: (name: string) => void;
    }>();

    // Use backgroundColor for the color swatch, fallback to value if not provided
    const colorForBackground = $derived(backgroundColor || value);

    function handleFavoriteClick(event: Event) {
        event.stopPropagation();
        onToggleFavorite?.(name);
    }
</script>

<div
    class="flex items-center gap-2 p-2 rounded hover:bg-[var(--vscode-list-hoverBackground)] group"
>
    <button
        type="button"
        class="flex items-center gap-2 flex-1 cursor-pointer"
        onclick={() => onCopy(name, value)}
        aria-label="Copy color value"
    >
        <div class="w-8 h-8 rounded" style="background-color: {colorForBackground}"></div>
        <div class="flex flex-col flex-1">
            <span class="text-xs font-medium">{name}</span>
            <span class="text-xs opacity-70">{value}</span>
        </div>
    </button>
    {#if onToggleFavorite}
        <button
            type="button"
            class="opacity-60 hover:opacity-100 p-1 rounded transition-opacity"
            onclick={handleFavoriteClick}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
            {#if isFavorite}
                <!-- Filled heart icon -->
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
            {:else}
                <!-- Outline heart icon -->
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
            {/if}
        </button>
    {/if}
</div>
