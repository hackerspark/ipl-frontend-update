<script>
  export let direction = 'none';
  export let mainBackground = 'rgb(58 95 26)';
  export let beforeTiltBackground = 'rgb(58 95 26)';
  export let afterTiltBackground = 'rgb(58 95 26)';
  export let margin = '3px';
</script>

<div
  class={direction ? direction + '-tilt' : ''}
  style="--main-background:{mainBackground};
  --before-tilt-background:{beforeTiltBackground};
  --after-tilt-background:{afterTiltBackground};--margin: {margin}"
>
  <slot />
</div>

<style>
  .right-tilt,
  .left-tilt,
  .both-tilt {
    position: relative;
    color: white;
    padding: 5px;
    background: var(--main-background);
    margin: var(--margin);
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
    background: var(--before-tilt-background);
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
    background: var(--after-tilt-background);
    transform: skewX(-345deg);
  }
</style>
