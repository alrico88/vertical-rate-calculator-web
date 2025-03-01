<script lang="ts">
  import GenericVerticalRate from './lib/GenericVerticalRate.svelte';
  import TheCredits from './lib/TheCredits.svelte';
  import ThreeToOneRule from './lib/ThreeToOneRule.svelte';
</script>

<div class="min-h-screen overflow-y-auto px-4 flex justify-center bg-container">
  <div class="container max-w-lg pb-4">
    <section class="py-6">
      <h1 class="text-3xl font-extrabold title mb-0">
        Vertical Rate Calculator
      </h1>
    </section>
    <div class="flex flex-col gap-4">
      <GenericVerticalRate></GenericVerticalRate>
      <ThreeToOneRule></ThreeToOneRule>
    </div>
    <hr class="mt-6 mb-4 border-gray-500" />
    <TheCredits></TheCredits>
  </div>
</div>

<style>
  .bg-container {
    background-color: #f1ebe6;
  }

  @media (prefers-color-scheme: dark) {
    .bg-container {
      background-color: #282a3a;
    }
  }

  .title {
    color: #ff4664;
  }
</style>
