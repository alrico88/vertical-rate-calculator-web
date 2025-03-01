<script lang="ts">
  import FormGroup from './FormGroup.svelte';
  import { calculateVerticalRate } from 'vertical-rate-calculator';
  import ResultCard from './ResultCard.svelte';
  import SectionTitle from './SectionTitle.svelte';
  import ErrorAlert from './ErrorAlert.svelte';

  let currentAltitude = $state(30000);
  let targetAltitude = $state(15000);
  let distance = $state(20);
  let groundSpeed = $state(210);

  const rate = $derived.by(() => {
    try {
      return calculateVerticalRate({
        currentAltitude: currentAltitude,
        targetAltitude,
        distance,
        groundSpeed,
      });
    } catch (e) {
      console.error(e);

      return null;
    }
  });
</script>

<section>
  <SectionTitle>Calculate Generic Vertical Rate</SectionTitle>
  <div class="grid grid-cols-2 gap-2 mb-4">
    <FormGroup
      icon="i-tabler:mountain"
      label="Current altitude (ft)."
      id="currAlt"
      bind:value={currentAltitude}
    ></FormGroup>
    <FormGroup
      icon="i-tabler:arrow-elbow-right"
      label="Target altitude (ft)."
      id="targetAlt"
      bind:value={targetAltitude}
    ></FormGroup>
    <FormGroup
      label="Distance (nm.)"
      id="dist"
      bind:value={distance}
      icon="i-tabler:arrows-move-horizontal"
    ></FormGroup>
    <FormGroup
      label="Ground speed (kts.)"
      id="speed"
      bind:value={groundSpeed}
      icon="i-tabler:gauge"
    ></FormGroup>
  </div>
  {#if rate !== null}
    <ResultCard>
      Needed vertical rate: <span class="font-bold">{rate}</span> ft/min
    </ResultCard>
  {:else}
    <ErrorAlert></ErrorAlert>
  {/if}
</section>
