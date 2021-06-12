<script>
  import Slide from '../components/Slide.svelte';
  import Stage from '../components/Stage.svelte';
  let batsmen = [
    {
      src: '/kohli.png',
    },
    {
      src: '/kohli.png',
    },
  ];
  let batsmenLogo = '/batsman.png';

  let bowlers = [
    {
      src: '/kohli.png',
    },
    {
      src: '/kohli.png',
    },
    {
      src: '/kohli.png',
    },
  ];
  let bowlerLogo = '/bowler.png';

  let wicketKeepers = [
    {
      src: '/kohli.png',
    },
  ];
  let wicketKeeperLogo = '/wicket-keeper.png';

  let allRounders = [
    {
      src: '/kohli.png',
      name: 'Virat Kohli',
      style: 'Batsman',
    },
    {
      src:
        'https://raw.githubusercontent.com/hackerspark/images/main/imageedit_3_5902486535.png',
      name: 'M.S Dhoni',
      style: 'Allrounder',
    },
    {
      src: '/sachin.png',
      name: 'Sachin Tendulkar',
      style: 'Batsman',
    },
    {
      src: '/kohli.png',
    },
    {
      src: '/kohli.png',
    },
  ];
  let allRounderLogo = '/all-rounder.png';
</script>

<div class="container">
  <div class="center">
    <img
      src="https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg"
      alt
    />
  </div>
  <div class="players">
    <Slide players={batsmen} logo={batsmenLogo} />
    <Slide players={bowlers} logo={bowlerLogo} />
    <Slide players={allRounders} logo={allRounderLogo} />
  </div>
  <div>
    <img src="/money-bag.png" alt />
  </div>
</div>

<style>
  .center {
    align-content: center;
  }
  .players {
    display: flex;
    flex-direction: column;
  }
  .container {
    padding: 60px 20px;
    display: flex;
    align-content: center;
  }
</style>
