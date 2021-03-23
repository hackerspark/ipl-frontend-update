<script>
  import {
    Tabs,
    Tab,
    TabContent,
    Row,
    Button,
    Column,
  } from 'carbon-components-svelte';
  import { replace } from 'svelte-spa-router';

  import PlayersList from '../components/PlayersList.svelte';
  import { bidStore } from '../stores/bid';

  function startBid({ detail: player }) {
    console.log(player);
    bidStore.update(() => true);
    replace('/bidControls');
  }
</script>

<Row padding>
  <Column lg={14} />
  <Column lg={2}>
    <Button>Reset</Button>
  </Column>
</Row>
<Tabs>
  <Tab label="Batsmen" />
  <Tab label="Bowler" />
  <Tab label="All Rounder" />
  <Tab label="Wicket Keeper" />
  <div slot="content">
    <TabContent>
      <PlayersList on:click={startBid} />
    </TabContent>
    <TabContent />
    <TabContent />
    <TabContent />
  </div>
</Tabs>
