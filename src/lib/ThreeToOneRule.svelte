<script lang="ts">
  import { calculateDescentPointUsing3To1Rule } from 'vertical-rate-calculator';
  import FormGroup from './FormGroup.svelte';
  import ResultCard from './ResultCard.svelte';
  import SectionTitle from './SectionTitle.svelte';
  import ErrorAlert from './ErrorAlert.svelte';

  let currentAltitude = $state(30000);
  let targetAltitude = $state(15000);

  const distance = $derived.by(() => {
    try {
      return calculateDescentPointUsing3To1Rule({
        currentAltitude: Number(currentAltitude),
        targetAltitude: Number(targetAltitude),
      });
    } catch (e) {
      console.error(e);

      return null;
    }
  });
</script>

<section>
  <SectionTitle>Calculate Descent Point Using 3:1 Rule</SectionTitle>
  <p class="text-slate-600 dark:text-slate-300 mb-4">
    The "3:1 rule of descent" is a rule of thumb that 3 nautical miles (5.6 km)
    of travel should be allowed for every 1,000 feet (300 m) of descent.
  </p>
  <div class="grid grid-cols-2 gap-2 mb-4">
    <FormGroup
      icon="i-tabler:mountain"
      label="Current altitude (ft)."
      id="currAlt3"
      bind:value={currentAltitude}
    ></FormGroup>
    <FormGroup
      icon="i-tabler:arrow-elbow-right"
      label="Target altitude (ft)."
      id="targetAlt3"
      bind:value={targetAltitude}
    ></FormGroup>
  </div>
  {#if distance !== null}
    <ResultCard
      >Distance to begin descent: <span class="font-bold">{distance}</span> nm</ResultCard
    >
  {:else}
    <ErrorAlert></ErrorAlert>
  {/if}
</section>
