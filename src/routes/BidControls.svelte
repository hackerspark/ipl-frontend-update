<script>
  import {
    Row,
    Column,
    DataTable,
    Button,
    Tabs,
    Tab,
    TabContent,
    Tile,
  } from 'carbon-components-svelte';
  import { replace } from 'svelte-spa-router';

  import TabbedTable from '../components/TabbedTable.svelte';
  import PlayerCard2 from '../components/PlayerCard2.svelte';
  import TiltRow from '../components/TiltRow.svelte';
  import BidTable from '../components/BidTable.svelte';
  import { bidStore } from '../stores/bid';

  function endBid() {
    bidStore.update(() => false);
    replace('/controlPanel');
  }

  function startBid({ detail: player }) {
    console.log(player);
    bidStore.update(() => true);
    replace('/bidControls');
  }
</script>

<div style="padding: 60px 10px">
  <Row padding>
    <Column lg={5}>
      <div style="margin: 30px;">
        <TabbedTable />
      </div>
      <div style="width: 250px; margin: 30px;">
        <TiltRow direction="both">
          <h6>Bowler : 7/20</h6>
        </TiltRow>
        <TiltRow direction="both">
          <h6>Bowler : 7/20</h6>
        </TiltRow>
        <TiltRow direction="both">
          <h6>Bowler : 7/20</h6>
        </TiltRow>
        <TiltRow direction="both">
          <h6>Bowler : 7/20</h6>
        </TiltRow>
      </div>
    </Column>

    <Column lg={6}>
      <div>
        <PlayerCard2 />
      </div>
    </Column>
    <Column lg={5}>
      <div>
        <BidTable />
      </div>
      <div>
        <Button>Bid End!</Button>
      </div>
    </Column>
  </Row>
</div>

<style>
  .select-button {
    width: 50px;
    height: 50px;
    line-height: 30px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
    border-radius: 50%;
    background: #1f477e;
    box-shadow: 0 15px #02214d;
  }
  .select-button:active {
    box-shadow: 0 0 #e24f4f;
    transform: translate(0px, 15px);
    transition: 0.1s all ease-out;
  }

  .right-cut:before {
    z-index: -1;
    content: '';
    position: absolute;
    left: -10%;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: inherit;
    transform: skewX(-10deg);
  }

  .right-cut.even {
    background: rgb(36, 0, 0);
    margin: 3px;
    /* background: linear-gradient(
      90deg,
      rgba(36, 0, 0, 1) 37%,
      rgba(24, 57, 0, 1) 98%,
      rgba(13, 105, 0, 1) 100%
    ); */
  }

  .right-cut.odd {
    background: rgb(88, 61, 97);
    /* background: linear-gradient(
      90deg,
      rgba(88, 61, 97, 1) 66%,
      rgba(115, 57, 59, 1) 87%,
      rgba(152, 51, 6, 1) 100%
    ); */
  }

  .right-cut {
    position: relative;
    display: inline-block;
    color: white;
    padding: 0.24em 0.3em 0.25em;
  }

  .batsman {
    width: 200px;
  }
  .bowler {
    position: relative;
    animation: move 4s 10;
    animation-timing-function: cubic-bezier(0.18, 0.82, 1, 1);
    animation-delay: 4s;
    width: 40px;
    right: 150px;
  }

  .show {
    opacity: 0;
    position: relative;
    font-size: 1.2rem;
    font-weight: bold;
    animation: show 3s 10;
    animation-delay: 4.5s;
  }

  @keyframes move {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(300px, 0);
    }
  }

  @keyframes show {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .overscroll {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
