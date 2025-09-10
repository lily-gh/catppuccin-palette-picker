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

    let isAnimating = $state(false);
    let rippleElements = $state.raw<HTMLElement[]>([]);

    function handleFavoriteClick(event: Event) {
        event.stopPropagation();
        onToggleFavorite?.(name);
    }

    async function handleCopyClick(event: MouseEvent) {
        // Start the animation
        isAnimating = true;
        
        // Create ripple effect
        const button = event.currentTarget as HTMLElement;
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        const ripple = document.createElement('div');
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        rippleElements.push(ripple);
        
        // Call the copy function
        onCopy(name, value);
        
        // Remove ripple after animation
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.remove();
            }
            const index = rippleElements.indexOf(ripple);
            if (index > -1) {
                rippleElements.splice(index, 1);
            }
        }, 600);
        
        // Hide the copy feedback after a short delay
        setTimeout(() => {
            isAnimating = false;
        }, 1000);
    }
</script>

<div
    class="flex items-center gap-2 p-2 rounded hover:bg-[var(--vscode-list-hoverBackground)] group"
>
    <button
        type="button"
        class="flex items-center gap-2 flex-1 cursor-pointer relative overflow-hidden"
        onclick={handleCopyClick}
        aria-label="Copy color value"
    >
        <div class="w-8 h-8 rounded" style="background-color: {colorForBackground}"></div>
        <div class="flex flex-col flex-1">
            <span class="text-xs font-medium">{name}</span>
            <span class="text-xs opacity-70">{value}</span>
        </div>
        
        <!-- Copy feedback overlay -->
        {#if isAnimating}
            <div class="absolute inset-0 flex items-center justify-center transition-opacity duration-200">
                <div class="flex items-center gap-2">
                    <!-- Copy icon -->
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--vscode-foreground)" stroke-width="2" class="opacity-80">
                        <rect width="14" height="14" x="8" y="8" rx="2" ry="2"/>
                        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>
                    </svg>
                    <!-- Checkmark icon -->
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--vscode-charts-green)" stroke-width="2" class="opacity-90">
                        <polyline points="20,6 9,17 4,12"/>
                    </svg>
                </div>
            </div>
        {/if}
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

<style>
    :global(.ripple) {
        position: absolute;
        border-radius: 50%;
        background-color: var(--vscode-list-hoverBackground);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
        opacity: 0.8;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
</style>
