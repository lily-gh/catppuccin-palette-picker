<script lang="ts">
    import { catppuccinColors, type Flavor, type Format } from "./colors";

    let { flavor = $bindable(), format = $bindable() } = $props<{
        flavor: Flavor;
        format: Format;
    }>();
</script>

<div class="flex flex-col gap-2">
    <select
        bind:value={flavor}
        class="w-full bg-transparent border p-1 rounded"
    >
        {#each Object.entries(catppuccinColors) as [key, flavorData]}
            <option value={key}>{flavorData.name}</option>
        {/each}
    </select>

    <select
        bind:value={format}
        class="w-full bg-transparent border p-1 rounded"
    >
        <option value="hex">HEX</option>
        <option value="rgb">RGB</option>
        <option value="hsl">HSL</option>
    </select>
</div>
