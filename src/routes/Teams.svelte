<script>
  import Slide from '../components/Slide.svelte';
  let batsmen = [
    {
      src: 'https://p.imgci.com/db/PICTURES/CMS/302400/302402.jpg',
    },
    {
      src: 'https://p.imgci.com/db/PICTURES/CMS/302400/302402.jpg',
    },
  ];
  let batsmenLogo = '/batsman.png';

  let bowlers = [
    {
      src: 'https://p.imgci.com/db/PICTURES/CMS/302400/302402.jpg',
    },
    {
      src: 'https://p.imgci.com/db/PICTURES/CMS/302400/302402.jpg',
    },
    {
      src: 'https://p.imgci.com/db/PICTURES/CMS/302400/302402.jpg',
    },
  ];
  let bowlerLogo = '/bowler.png';

  let wicketKeepers = [
    {
      src: 'https://p.imgci.com/db/PICTURES/CMS/302400/302402.jpg',
    },
  ];
  let wicketKeeperLogo = '/wicket-keeper.png';

  let allRounders = [
    {
      src: 'https://p.imgci.com/db/PICTURES/CMS/302400/302402.jpg',
    },
    {
      src: 'https://p.imgci.com/db/PICTURES/CMS/302400/302402.jpg',
    },
    {
      src: 'https://p.imgci.com/db/PICTURES/CMS/302400/302402.jpg',
    },
    {
      src: 'https://p.imgci.com/db/PICTURES/CMS/302400/302402.jpg',
    },
    {
      src: 'https://p.imgci.com/db/PICTURES/CMS/302400/302402.jpg',
    },
  ];
  let allRounderLogo = '/all-rounder.png';
</script>

<div style="padding: 60px 20px">
  <div>
    <Slide players={batsmen} logo={batsmenLogo} />
  </div>
  <div>
    <Slide players={bowlers} logo={bowlerLogo} />
  </div>
  <div>
    <Slide players={wicketKeepers} logo={wicketKeeperLogo} />
  </div>
  <div>
    <Slide players={allRounders} logo={allRounderLogo} />
  </div>
</div>
