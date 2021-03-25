<script>
  export let direction = '';
</script>

<div class={direction ? direction + '-tilt' : ''}>
  <slot />
</div>

<style>
  .right-tilt,
  .left-tilt,
  .both-tilt {
    position: relative;
    color: white;
    padding: 5px;
    background: rgb(58 95 26);
    margin: 3px;
  }
  .left-tilt:before,
  .both-tilt:before {
    z-index: -1;
    content: '';
    position: absolute;
    left: -10px;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgb(58 95 26);
    transform: skewX(-15deg);
  }
  .right-tilt:after,
  .both-tilt:after {
    z-index: -1;
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    height: 100%;
    width: 100%;
    background: rgb(58 95 26);
    transform: skewX(-345deg);
  }
</style>
