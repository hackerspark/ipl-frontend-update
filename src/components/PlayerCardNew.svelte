<script>
  export let player = {
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

  let roles = '';
  $: roles = player?.role?.join(' ');
</script>

<div class="card blur">
  <div class="container">
    <div class="image-container">
      <img class="fit-image" src={player.url} alt={player.name} />
    </div>
    <div class="stats-container">
      <div class="player-detail-container">
        <span class="label margin-left-1ch">Name</span>
        <span class="text bold">{player.name}</span>

        <span class="label margin-left-1ch">DOB</span>
        <span class="text">{player.dob}</span>

        <span class="label margin-left-1ch">Role</span>
        <span class="text">{roles}</span>
      </div>
      <div class="primary-stats-container">
        <span class="brown">Matches</span>
        <span class="brown">Runs</span>
        <span class="brown">Wickets</span>

        <h3>{player.matches}</h3>
        <h3>{player.runs}</h3>
        <h3>{player.wickets}</h3>
      </div>
      <div class="secondary-stats-container">
        <span class="label margin-left-1ch">Batting Style</span>
        <span class="text">{player.battingStyle}</span>

        <span class="label margin-left-1ch">Bowling Style</span>
        <span class="text">{player.bowlingStyle}</span>
      </div>
      <div class="links-container">
        <button class="circular-btn center">See Stats</button>
      </div>
    </div>
  </div>
</div>

<style>
  @font-face {
    font-family: Cream;
    src: url('/cream.ttf');
  }
  .card {
    width: 300px;
    border: solid 3px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    font-family: 'Cream', sans-serif;
  }
  .blur {
    background: rgba(25, 106, 115, 0.7);
    backdrop-filter: blur(2px);
  }
  .container {
    display: grid;
    grid-template-rows: 45% 45% 10%;
    grid-gap: 1ch;
  }
  .image-container {
    display: grid;
  }
  .stats-container {
    display: grid;
    grid-template-rows: 30% 35% 25% 10%;
    grid-gap: 1ch;
  }
  .player-detail-container {
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-columns: 30% 70%;
    grid-gap: 3px 7px;
  }
  .primary-stats-container {
    display: grid;
    grid-template-rows: 30% 70%;
    grid-template-columns: repeat(3, auto);
    grid-gap: 5px 10px;
    justify-items: center;
  }
  .secondary-stats-container {
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-template-columns: 40% 60%;
  }
  .links-container {
    display: grid;
  }

  .fit-image {
    max-height: 100%;
    object-fit: contain;
    width: 150px;
    justify-self: center;
  }

  .label {
    color: black;
  }
  .brown {
    color: #490003;
    text-decoration: underline;
  }
  .text {
    color: black;
  }
  .bold {
    font-weight: bold;
  }

  .circular-btn {
    border-radius: 10px;
    padding: 2% 20%;
  }
  .center {
    justify-self: center;
  }
  .margin-left-1ch {
    margin-left: 1ch;
  }
</style>
