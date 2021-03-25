<script>
  import TiltRow from './TiltRow.svelte';
  let player = {
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
  };
</script>

<div class="container">
  <div class="image-container">
    <img class="fit-image" src={player.url} alt={player.name} />
  </div>
  <div class="name-container">
    <h3>{player.name}</h3>
  </div>
  <div class="stats-container">
    <TiltRow direction="both"
      ><div style="width:300px">Hello World</div></TiltRow
    >
    <TiltRow direction="both"
      ><div style="width:300px">Hello World</div></TiltRow
    >
    <TiltRow direction="both"
      ><div style="width:300px">Hello World</div></TiltRow
    >
    <TiltRow direction="both"
      ><div style="width:300px">Hello World</div></TiltRow
    >
    <TiltRow direction="both"
      ><div style="width:300px">Hello World</div></TiltRow
    >
    <TiltRow direction="both"
      ><div style="width:300px">Hello World</div></TiltRow
    >
  </div>
</div>

<style>
  .container {
    display: grid;
    grid-template-rows: 40% 10% 50%;
    width: 350px;
    background: rgba(70, 18, 107, 0.5);
    backdrop-filter: blur(2px);
    box-shadow: 2px 2px 10px rgb(145 60 206);
  }
  .image-container {
    display: grid;
  }
  .image-container img {
    max-height: 100%;
    object-fit: contain;
    width: 150px;
    justify-self: center;
  }
  .name-container {
    display: grid;
    justify-items: center;
  }
  .stats-container {
    display: grid;
    grid-template-rows: repeat(6, auto);
    justify-items: center;
  }
</style>
