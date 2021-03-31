<script>
  export let logo;
  export let players = [];
</script>

<div class="container">
  <div class="rounded">
    <img src={logo} alt />
  </div>
  {#each players as player}
    <div class="frame">
      <img src={player.src} class="contained" alt />
    </div>
  {/each}
</div>

<style>
  .container {
    display: inline-flex;
    border: solid 1px;
    align-items: center;
    margin: 10px 0;
  }
  .rounded {
    border-radius: 50%;
    object-fit: contain;
    border: solid 1px;
    margin: 3px;
  }
  .rounded img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .contained {
    width: 100px;
    object-fit: contain;
    border: solid 1px;
  }
  .frame {
    display: flex;
    align-items: center;
    margin: 0 5px;
  }
</style>
