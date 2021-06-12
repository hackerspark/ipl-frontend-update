<script>
  export let players = [];
</script>

<div class="container">
  {#each players as player}
    <div class="player-card">
      <div class="frame">
        <img src={player.src} class="contained" alt />
        {#if player.style === 'Batsman'}
          <img src="/batsman.png" alt class="favicon" />
        {/if}
        {#if player.style === 'Allrounder'}
          <img src="/cricket.png" alt class="favicon" />
        {/if}
      </div>
      <div class="stats">
        <div class="name">
          <h5>{player.name}</h5>
          <span>₹ 2000</span>
        </div>
      </div>
    </div>
  {/each}
</div>

<style>
  .favicon {
    width: 16px;
    position: absolute;
    top: 2px;
    right: 2px;
  }
  .name {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
  }
  .player-card {
    display: flex;
    flex-direction: column;
  }
  .stats {
    display: flex;
    flex-direction: column;
    padding-left: 5px;
  }
  .container {
    display: inline-flex;
    /* border: solid 1px; */
    /* box-shadow: 0 0 10px white; */
    align-items: center;
    justify-content: center;
    margin: 10px 0;
    /* border-radius: 10px; */
  }
  .contained {
    width: 100px;
    height: 100px;
    object-fit: contain;
    /* border: solid 1px; */
  }
  .frame {
    display: flex;
    align-items: center;
    margin: 0 10px;
    border-radius: 5px;
    border: solid 1px white;
    position: relative;
    /* box-shadow: 0 0 10px white; */
    backdrop-filter: blur(2px);
  }
</style>
