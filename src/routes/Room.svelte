<script>
</script>

<!-- <div class="d-flex flex-column mt-4 mb-4">
  {#await data}
    <p>Loading ...</p>
  {:then player}
    <div class="white-text d-flex blue darken-3">
      <ul class="ul-2-col">
        {#each Object.entries(player) as [key, value]}
          <li class="ma-2 ma-2">{keyToLabel(key)} : {value}</li>
        {/each}
      </ul>
      <div class="d-flex justify-center align-center">
        <img src="/favicon.png"/>
      </div>
    </div>
  {:catch error}
    <h1>Bidding Yet To Start!</h1>
  {/await}
</div>
<div class="d-flex align-flex-start justify-center">
  <div style="width:50vw">
    <TextField on:input={(e) => (bid = Number(e.target.value) || 0)} bind:value={bid} outlined style="max-width:350px;">Bid</TextField>
    <Button on:click={submitBid}>Confirm</Button>
  </div>
  <div>
    <h6>Top Bid</h6>
    <br/>
    <span class="body2">Team Name : Team Value</span>
  </div>

</div> -->
Room
