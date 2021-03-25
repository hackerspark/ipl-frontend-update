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
      id: 'c',
      name: 'Team C',
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
    <th>Name</th>
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
  .table {
    border-spacing: 0;
    background: rgba(25, 106, 115, 0.7);
    backdrop-filter: blur(2px);
    /* border: solid 1px; */
    border-radius: 5px;
  }
  th,
  td {
    padding: 10px 20px;
    font-size: 0.7rem;
  }
  th {
    background-color: black;
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
</style>
