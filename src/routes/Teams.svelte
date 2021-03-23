<script>
  import { Accordion } from 'carbon-components-svelte';
  import TeamOverview from '../components/TeamOverview.svelte';

  import { getTeams } from '../utils/dataUtil';
</script>

{#await getTeams()}
  <Accordion skeleton />
{:then teams}
  <Accordion>
    {#each teams as team}
      <TeamOverview {team} />
    {/each}
  </Accordion>
{/await}
