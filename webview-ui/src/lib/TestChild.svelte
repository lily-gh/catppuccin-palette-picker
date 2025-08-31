<script lang="ts">
    import { catppuccinColors, type Flavor } from "./colors";

    let { childFlavor = $bindable() }: { childFlavor: Flavor } = $props();
    
    $effect(() => {
        console.log('TestChild: childFlavor is:', childFlavor);
    });
</script>

<select bind:value={childFlavor} class="p-1 border ml-2">
    {#each Object.entries(catppuccinColors) as [key, flavorData]}
        <option value={key}>{flavorData.name}</option>
    {/each}
</select>
