<script lang="ts">
    let { name, value, backgroundColor, onCopy } = $props<{
        name: string;
        value: string;
        backgroundColor?: string;
        onCopy: (text: string) => void;
    }>();

    // Use backgroundColor for the color swatch, fallback to value if not provided
    const colorForBackground = backgroundColor || value;
</script>

<button
    type="button"
    class="flex items-center gap-2 p-2 rounded hover:bg-[var(--vscode-list-hoverBackground)] cursor-pointer"
    onclick={() => onCopy(value)}
    aria-label="Copy color value"
>
    <div class="w-4 h-4 rounded" style="background-color: {colorForBackground}"></div>
    <div class="flex flex-col">
        <span class="text-xs font-medium">{name}</span>
        <span class="text-xs opacity-70">{value}</span>
    </div>
</button>
