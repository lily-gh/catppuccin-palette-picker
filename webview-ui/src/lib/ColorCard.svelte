<script lang="ts">
    export let name: string;
    export let value: string;
    export let onCopy: (text: string) => void;
</script>

<div
    class="flex items-center gap-2 p-2 rounded hover:bg-[var(--vscode-list-hoverBackground)] cursor-pointer"
    on:click={() => onCopy(value)}
>
    <div class="w-4 h-4 rounded" style="background-color: {value}"></div>
    <div class="flex flex-col">
        <span class="text-xs font-medium">{name}</span>
        <span class="text-xs opacity-70">{value}</span>
    </div>
</div>
