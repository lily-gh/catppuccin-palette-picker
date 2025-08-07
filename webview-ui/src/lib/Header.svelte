<script lang="ts">
    import { type Writable } from "svelte/store";
    export let flavor: Writable<"latte" | "frappe" | "macchiato" | "mocha">;
    export let format: Writable<"hex" | "rgb" | "hsl">;
</script>

<div class="flex flex-col gap-2">
    <select
        bind:value={$flavor}
        class="w-full bg-transparent border p-1 rounded"
    >
        <option value="latte">Latte</option>
        <option value="frappe">Frappé</option>
        <option value="macchiato">Macchiato</option>
        <option value="mocha">Mocha</option>
    </select>

    <select
        bind:value={$format}
        class="w-full bg-transparent border p-1 rounded"
    >
        <option value="hex">HEX</option>
        <option value="rgb">RGB</option>
        <option value="hsl">HSL</option>
    </select>
</div>
