<script lang="ts">
    import ColorCard from "./ColorCard.svelte";
    export let colors: Record<string, string>;
    export let format: "hex" | "rgb" | "hsl";
    export let onCopy: (text: string) => void;
</script>

<div class="flex flex-col gap-2 overflow-auto max-h-[calc(100vh-120px)] pr-1">
    {#each Object.entries(colors) as [name, value]}
        <ColorCard {name} {value} {onCopy} />
    {/each}
</div>
