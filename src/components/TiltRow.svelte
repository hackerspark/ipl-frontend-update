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
    background: rgb(69, 65, 92);
    background: linear-gradient(
      90deg,
      rgba(69, 65, 92, 1) 39%,
      rgba(37, 28, 78, 1) 94%,
      rgba(148, 0, 244, 1) 100%
    );
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
    background-color: rgb(74, 74, 74);
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
    background-color: inherit;
    transform: skewX(-345deg);
  }
</style>
