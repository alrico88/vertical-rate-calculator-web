<script>
  let { children } = $props();
</script>

<h2 class="text-xl font-600 mb-4 text-slate-900 dark:text-slate-100">
  {@render children?.()}
</h2>
