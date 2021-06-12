<script>
  export let data;
</script>

<div class="slide">
  {#each Object.entries(data) as [key, value]}
    <span class="ml-1 mr-1">{key} : {value}</span>
  {/each}
</div>

<style>
  .slide {
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
</style>
