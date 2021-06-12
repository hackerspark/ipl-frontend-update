<script>
  import { Row, Column } from 'carbon-components-svelte';
  import { replace } from 'svelte-spa-router';

  import TabbedTable from '../components/TabbedTable.svelte';
  import PlayerCard2 from '../components/PlayerCard2.svelte';
  import TiltRow from '../components/TiltRow.svelte';
  import BidTable from '../components/BidTable.svelte';
  import PushButton from '../components/PushButton.svelte';
  import { bidStore } from '../stores/bid';
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
            <img src="ball.png" alt style="width:20px;height:20px;" />
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
  @font-face {
    font-family: Sport;
    src: url('/Sport.TTF');
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
