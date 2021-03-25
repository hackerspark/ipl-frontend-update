<script>
  import PushButton from './PushButton.svelte';
  export let players = [
    {
      url:
        'https://raw.githubusercontent.com/hackerspark/images/main/imageedit_3_5902486535.png',
      name: 'M.S Dhoni',
      dob: '07 July 1981',
      role: ['Wicketkeeper', 'Batsman'],
      matches: 15,
      runs: 416,
      wickets: 0,
      battingStyle: 'Right-Handed',
      bowlingStyle: 'Right-Arm Medium',
      basePrice: 100,
      criticsRating: 9,
    },
    {
      url:
        'https://raw.githubusercontent.com/hackerspark/images/main/imageedit_3_5902486535.png',
      name: 'M.S Dhoni',
      dob: '07 July 1981',
      role: ['Wicketkeeper', 'Batsman'],
      matches: 15,
      runs: 416,
      wickets: 0,
      battingStyle: 'Right-Handed',
      bowlingStyle: 'Right-Arm Medium',
      basePrice: 100,
      criticsRating: 9,
    },
    {
      url:
        'https://raw.githubusercontent.com/hackerspark/images/main/imageedit_3_5902486535.png',
      name: 'M.S Dhoni',
      dob: '07 July 1981',
      role: ['Wicketkeeper', 'Batsman'],
      matches: 15,
      runs: 416,
      wickets: 0,
      battingStyle: 'Right-Handed',
      bowlingStyle: 'Right-Arm Medium',
      basePrice: 100,
      criticsRating: 9,
    },
    {
      url:
        'https://raw.githubusercontent.com/hackerspark/images/main/imageedit_3_5902486535.png',
      name: 'M.S Dhoni',
      dob: '07 July 1981',
      role: ['Wicketkeeper', 'Batsman'],
      matches: 15,
      runs: 416,
      wickets: 0,
      battingStyle: 'Right-Handed',
      bowlingStyle: 'Right-Arm Medium',
      basePrice: 100,
      criticsRating: 9,
    },
  ];
</script>

<div class="container">
  <div class="tabs">
    <button class="tab">Batsman</button>
    <button class="tab selected">Bowler</button>
    <button class="tab">All Rounder</button>
    <button class="tab">Wicket Keeper</button>
  </div>
  <table class="table">
    <thead>
      <th>Name</th>
      <th>Base Price</th>
      <th>Critics Rating</th>
      <th />
    </thead>
    <tbody class="fixed">
      {#each players as player}
        <tr>
          <td>{player.name}</td>
          <td>{player.basePrice}</td>
          <td>{player.criticsRating}</td>
          <td>
            <PushButton text="Bid!" />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  .container {
    display: grid;
    grid-template-rows: 20% 80%;
    grid-gap: 3px 0;
    width: 400px;
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(to bottom, #960101, #e3d51c) 1;
  }
  .fixed {
    height: 150px;
    overflow-y: auto;
  }
  .tabs {
    display: grid;
    grid-template-columns: repeat(4, auto);
  }
  .tab {
    background: rgb(37, 28, 78);
    background: linear-gradient(
      180deg,
      rgba(37, 28, 78, 1) 38%,
      rgba(86, 27, 124, 1) 67%
    );

    color: white;
    font-family: 'IBM Plex Sans', 'Helvetica Neue', Arial, sans-serif;
    font-weight: bold;
  }
  .tab.selected {
    background: rgb(58, 28, 78);
    background: linear-gradient(
      180deg,
      rgba(58, 28, 78, 1) 22%,
      rgba(86, 27, 124, 1) 67%,
      rgba(187, 255, 0, 1) 90%
    );
  }

  .table {
    border-spacing: 0;
    backdrop-filter: blur(2px);
  }
  th,
  td {
    padding: 10px 20px;
    font-size: 0.7rem;
  }
  tr:nth-of-type(2n) {
    background-color: rgba(60, 25, 101, 0.7);
  }
  tr:nth-of-type(2n + 1) {
    background-color: rgba(155, 137, 179, 0.7);
  }
  th {
    background-color: black;
  }
</style>
