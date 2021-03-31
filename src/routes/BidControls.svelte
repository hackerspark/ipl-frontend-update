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
  import { LottiePlayer } from '@lottiefiles/svelte-lottie-player';

  import TabbedTable from '../components/TabbedTable.svelte';
  import PlayerCard2 from '../components/PlayerCard2.svelte';
  import TiltRow from '../components/TiltRow.svelte';
  import BidTable from '../components/BidTable.svelte';
  import PushButton from '../components/PushButton.svelte';
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
      <div style="margin-left: 30px;">
        <TabbedTable />
      </div>
      <div style="width: 250px; margin: 30px;">
        <TiltRow
          direction="right"
          mainBackground="linear-gradient(90deg, rgba(194,26,246,1) 0%, rgba(77,47,107,1) 3%, rgba(40,23,57,1) 15%)
        "
          beforeTiltBackground="rgba(194,26,246,1)"
          afterTiltBackground="rgba(40,23,57,1)"
          margin="10px"
        >
          <h6>Bowler : 7/20</h6>
        </TiltRow>
        <TiltRow
          direction="right"
          mainBackground="linear-gradient(90deg, rgba(194,26,246,1) 0%, rgba(77,47,107,1) 3%, rgba(40,23,57,1) 15%)
        "
          beforeTiltBackground="rgba(194,26,246,1)"
          afterTiltBackground="rgba(40,23,57,1)"
          margin="10px"
        >
          <h6>Batsman : 2/20</h6>
        </TiltRow>
        <TiltRow
          direction="right"
          mainBackground="linear-gradient(90deg, rgba(194,26,246,1) 0%, rgba(77,47,107,1) 3%, rgba(40,23,57,1) 15%)
        "
          beforeTiltBackground="rgba(194,26,246,1)"
          afterTiltBackground="rgba(40,23,57,1)"
          margin="10px"
        >
          <h6>All Rounder : 5/10</h6>
        </TiltRow>
        <TiltRow
          direction="right"
          mainBackground="linear-gradient(90deg, rgba(194,26,246,1) 0%, rgba(77,47,107,1) 3%, rgba(40,23,57,1) 15%)
        "
          beforeTiltBackground="rgba(194,26,246,1)"
          afterTiltBackground="rgba(40,23,57,1)"
          margin="10px"
        >
          <h6>Wicket Keeper : 2/7</h6>
        </TiltRow>
      </div>
    </Column>

    <Column lg={5}>
      <div>
        <PlayerCard2 />
      </div>
    </Column>
    <Column lg={3}>
      <div>
        <BidTable />
      </div>
      <div id="stage">
        <div id="traveler">
          <div id="bouncer">
            <img
              src="https://www.pngarts.com/files/2/Cricket-Ball-PNG-Photo.png"
              alt
              style="width:20px;height:20px;"
            />
          </div>
        </div>
      </div>
    </Column>
    <Column lg={3}>
      <div class="swing">
        <div
          style="width: 200px;color:rgb(222 255 15);padding:10px;text-align: center;font-family: MAKISUPA"
        >
          Highest Bid
        </div>
        <hr />
        <div
          style="width: 200px;color:rgb(222 255 15);padding:10px;font-family: Sport;text-align:center;"
        >
          <div>Team A</div>
          <div style="font-size:25px;padding-top:10px;">2000</div>
        </div>
      </div>
      <div style="float:left; margin: 8px;">
        <PushButton
          text="Sold!"
          background="rgb(3, 90, 2)"
          pushShadow="rgb(66,76,43,0.7)"
        />
      </div>
      <div style="float:left; margin: 8px;">
        <PushButton
          text="Unsold!"
          background="rgba(115, 2, 2,1)"
          pushShadow="rgba(78, 53, 2,0.7)"
        />
      </div>
      <div
        style="clear:both;clear: both;
      position: fixed;
      bottom: 0;"
      />
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

  @font-face {
    font-family: Sport;
    src: url('/Sport.TTF');
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

  .swing {
    animation: swing ease-in-out 1s infinite alternate;
    transform-origin: center -20px;
    float: left;
    border: solid 1px blue;
    box-shadow: 5px 5px 10px #6e6eff;
    margin: 20px 0 30px 0;
  }
  .swing:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 1px solid #f00;
    top: -10px;
    left: 50%;
    z-index: 0;
    border-bottom: none;
    border-right: none;
    transform: rotate(45deg);
  }
  /* nail */
  .swing:before {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    top: -14px;
    left: 54%;
    z-index: 5;
    border-radius: 50% 50%;
    background: #f00;
  }

  @keyframes swing {
    0% {
      transform: rotate(3deg);
    }
    100% {
      transform: rotate(-3deg);
    }
  }
  @keyframes travel {
    from {
      left: 0;
    }
    to {
      left: 500px;
    }
  }

  @keyframes bounce {
    from,
    to {
      bottom: 220px;
      animation-timing-function: ease-in;
    }
    70% {
      bottom: 0;
      animation-timing-function: ease-out;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes depth {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(3);
    }
  }

  /* styles for the stage and animated elements */

  #stage {
    position: relative;
    margin: 5em 0;
    width: 660px;
    height: 240px;
    /*  border: 2px solid #666;
  background: #cff; */
  }

  #traveler {
    position: absolute;
    width: 40px;
    height: 240px;

    animation-name: travel;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-duration: 2.2s;
    animation-fill-mode: forwards;
  }

  #bouncer {
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 10px;
    /*   background: red; */

    animation-name: bounce, spin, depth;
    animation-iteration-count: infinite;
    animation-duration: 2.2s;
    animation-fill-mode: forwards;
  }
</style>
