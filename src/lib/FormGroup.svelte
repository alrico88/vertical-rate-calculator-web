<script lang="ts">
  import type { Snippet } from 'svelte';

  let {
    icon,
    label,
    value = $bindable(),
    id,
  }: { icon?: string; label: string; value: number; id: string } = $props();
</script>

<div>
  <label for={id} class="mb-2 block text-slate-800 dark:text-slate-200">
    {#if icon}
      <div class={icon}></div>
    {/if}
    {label}</label
  >
  <input
    type="number"
    {id}
    bind:value
    min="0"
    class="p-3 w-full rounded border border-solid border-gray-300 bg-white dark:bg-gray-500 dark:text-white"
  />
</div>
