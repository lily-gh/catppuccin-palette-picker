<script lang="ts">
    import { catppuccinColors, type Flavor } from "./colors";
    import TestChild from "./TestChild.svelte";

    let testFlavor: Flavor = $state('mocha');
    
    // Debug current flavor
    $effect(() => {
        console.log('TestParent: testFlavor is:', testFlavor);
    });
</script>

<div class="p-4 border border-blue-500 mb-4">
    <h3>Test Parent Component</h3>
    <p>Parent flavor: {testFlavor}</p>
    
    <!-- Direct select without bindable -->
    <div class="mb-2">
        <span>Direct select:</span>
        <select bind:value={testFlavor} class="p-1 border ml-2">
            {#each Object.entries(catppuccinColors) as [key, flavorData]}
                <option value={key}>{flavorData.name}</option>
            {/each}
        </select>
    </div>
    
    <!-- Child component with bindable -->
    <div class="mb-2">
        <span>Child component:</span>
        <TestChild bind:childFlavor={testFlavor} />
    </div>
    
    <!-- Show current colors -->
    <div class="mt-2">
        <p>Current colors for {testFlavor}:</p>
        {#each Object.entries(catppuccinColors[testFlavor].colors).slice(0, 3) as [name, colorValue]}
            <div class="flex items-center gap-2">
                <div class="w-4 h-4" style="background-color: {colorValue.hex}"></div>
                <span>{name}: {colorValue.hex}</span>
            </div>
        {/each}
    </div>
</div>
