<script>
  import { createEventDispatcher } from 'svelte';
  import { Tile, Row, Column, ClickableTile } from 'carbon-components-svelte';

  export let player = {
    _id: '605449eccad2f35a00041ed2',
    id: 5,
    playerName: 'Badrinath, S',
    iplSeasonsPlayed: 2,
    role: 'Batsman',
    totalRuns: 63,
    totalWickets: 0,
    odiRunsS: 79,
    odiSrB: 45.93,
    odiWickets: 0,
    odiSrBL: 0,
    captaincyExp: 0,
    runsS: 1317,
    hs: 71,
    average: 32.93,
    srB: 120.71,
    sixers: 28,
    runsC: 0,
    wickets: 0,
    aveBL: 0,
    econ: 0,
    srBL: 0,
    basePrice: 100000,
    criticsRating: 6,
    successAssestmentInPrecent: 56,
    img: 'https://p.imgci.com/db/PICTURES/CMS/302300/302389.jpg',
  };

  export let readOnly = false;

  let renderComponent;
  const dispatch = createEventDispatcher();

  $: renderComponent = readOnly ? Tile : ClickableTile;

  function handleClick() {
    if (!readOnly) {
      dispatch('click', player);
    }
  }
</script>

<svelte:component this={renderComponent} on:click={handleClick}>
  <Row>
    <Column lg={2}>
      <img src={player.img} class="round-image" alt={player.playerName} />
    </Column>
    <Column lg={14}>
      <Row>
        <h3>{player.playerName}</h3>
      </Row>
      <Row>
        <Column>Role : {player.role}</Column>
        <Column>IPL Seasons : {player.iplSeasonsPlayed}</Column>
        <Column>Average : {player.average}</Column>
      </Row>
      <Row>
        <Column>Total Runs : {player.totalRuns}</Column>
        <Column>Total Wickets : {player.totalWickets}</Column>
        <Column>Critics Rating : {player.criticsRating}</Column>
      </Row>
    </Column>
  </Row>
</svelte:component>

<style>
  .round-image {
    width: inherit;
    height: inherit;
    border-radius: 50%;
  }
</style>
