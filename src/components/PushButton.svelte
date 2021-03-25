<script>
  export let text = 'Click Me!';
  export let background = '#1f477e';
  export let pushShadow = '#02214d';
  export let activePushShadow = '#e24f4f';
</script>

<div
  class="container"
  style="--push-background: {background};--push-shadow: {pushShadow};--active-push-shadow:{activePushShadow}"
  on:click
>
  <div class="push-button">
    {text}
  </div>
</div>

<style>
  .container {
    width: 100px;
    height: 40px;
  }
  .push-button {
    width: 100%;
    height: 100%;
    text-align: center;
    font-weight: bold;
    color: white;
    cursor: pointer;
    user-select: none;
    border-radius: 50%;
    background: var(--push-background);
    box-shadow: 0 10px var(--push-shadow);
    padding: 5px;
  }
  .push-button:active {
    box-shadow: 0 0 var(--active-push-shadow);
    transform: translate(0px, 15px);
    transition: 0.1s all ease-out;
  }
</style>
