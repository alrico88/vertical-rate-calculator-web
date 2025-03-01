<script>
  let { children } = $props();
</script>

<div
  class="p-4 border border-solid border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 shadow rounded text-dark dark:text-slate-200"
>
  {@render children?.()}
</div>
