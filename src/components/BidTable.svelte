<script>
  export let bids = [
    {
      id: 'a',
      name: 'Team A',
      bid: 200,
    },
    {
      id: 'b',
      name: 'Team B',
      bid: 300,
    },
    {
      id: 'd',
      name: 'Team D',
      bid: 400,
    },
    {
      id: 'e',
      name: 'Team E',
      bid: 400,
    },
    {
      id: 'f',
      name: 'Team F',
      bid: 400,
    },
    {
      id: 'g',
      name: 'Team G',
      bid: 400,
    },
  ];
</script>

<div class="container">
  <div class="outer">
    <div class="inner" />
    <span>LIVE</span>
  </div>
  <table class="table">
    <th>Teams</th>
    <th>Bid Value</th>
    {#each bids as bid}
      <tr>
        <td>{bid.name}</td>
        <td>{bid.bid}</td>
      </tr>
    {/each}
  </table>
</div>

<style>
  @font-face {
    font-family: MAKISUPA;
    src: url('/MAKISUPA.TTF');
  } 
  .table {
    border-spacing: 0;
    /* background: rgba(25, 106, 115, 0.7); */
    /* backdrop-filter: blur(2px); */
    /* border: solid 1px; */
    border-radius: 5px;
    box-shadow: 2px 5px 10px #917a01;
    border: solid #a98e00;
    border-width: 1px;
    font-family: 'MAKISUPA', sans-serif;
    width: 230px;
  }
  th,
  td {
    padding: 10px 20px;
    font-size: 0.8rem;
  }
  tr {
    text-align: center;
  }
  th {
    /* background-color: black; */
    border-bottom: solid 1px rgb(255 215 0 / 30%);
    color: rgb(219 186 8);
  }
  .outer {
    border-radius: 8px;
    padding: 5px 0;
  }

  .inner {
    background: red;
    border: 0.1875em solid red;
    border-radius: 50%;
    height: 10px;
    width: 10px;
    display: inline-block;
    animation: blink-animation 1s steps(5, start) infinite;
  }

  @keyframes blink-animation {
    to {
      visibility: hidden;
    }
  }

  .container {
    width: 300px;
  }
</style>
