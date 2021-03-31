<script>
  // import div from './div.svelte';
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
    <h3 style="font-family:SPORTVIPER;text-shadow:0 0 10px red">
      {player.name}
    </h3>
  </div>
  <div class="stats-container">
    <div style="margin: 5px 0; box-shadow: 0 0 5px white;padding: 10px">
      <div style="width:300px;font-family: MAKISUPA">
        <div style="float:left;padding: 0 50px 0 0">Matches</div>
        <div style="float:right;padding: 0 0 0 50px">11</div>
      </div>
    </div>
    <div style="margin: 5px 0; box-shadow: 0 0 5px white;padding: 10px">
      <div style="width:300px;font-family: MAKISUPA">
        <div style="float:left;padding: 0 50px 0 0">Runs</div>
        <div style="float:right;padding: 0 0 0 50px">325</div>
      </div>
    </div>
    <div style="margin: 5px 0; box-shadow: 0 0 5px white;padding: 10px">
      <div style="width:300px;font-family: MAKISUPA">
        <div style="float:left;padding: 0 50px 0 0">50s</div>
        <div style="float:right;padding: 0 0 0 50px">2</div>
      </div>
    </div>
    <div style="margin: 5px 0; box-shadow: 0 0 5px white;padding: 10px">
      <div style="width:300px;font-family: MAKISUPA">
        <div style="float:left;padding: 0 50px 0 0">100s</div>
        <div style="float:right;padding: 0 0 0 50px">1</div>
      </div>
    </div>
    <div style="margin: 5px 0; box-shadow: 0 0 5px white;padding: 10px">
      <div style="width:300px;font-family: MAKISUPA">
        <div style="float:left;padding: 0 50px 0 0">Average</div>
        <div style="float:right;padding: 0 0 0 50px">52.14</div>
      </div>
    </div>
    <div style="margin: 5px 0; box-shadow: 0 0 5px white;padding: 10px">
      <div style="width:300px;font-family: MAKISUPA">
        <div style="float:left;padding: 0 50px 0 0">Strike Rate</div>
        <div style="float:right;padding: 0 0 0 50px">144.8</div>
      </div>
    </div>
    <div style="margin: 5px 0; box-shadow: 0 0 5px white;padding: 10px">
      <div style="width:300px;font-family: MAKISUPA">
        <div style="float:left;padding: 0 50px 0 0">Highest Score</div>
        <div style="float:right;padding: 0 0 0 50px">200</div>
      </div>
    </div>
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
  @font-face {
    font-family: MAKISUPA;
    src: url('/MAKISUPA.TTF');
  }

  @font-face {
    font-family: SPORTVIPER;
    src: url('/SPORTVIPER.TTF');
  }
</style>
