<script>
  export let direction = 'none';
  export let mainBackground = 'rgb(58 95 26)';
  export let beforeTiltBackground = 'rgb(58 95 26)';
  export let afterTiltBackground = 'rgb(58 95 26)';
  export let borderTiltBefore = 'initial';
  export let borderTiltAfter = 'initial';
  export let borderTilt = 'initial';
  export let margin = '3px';
</script>

<div
  class={direction ? direction + '-tilt' : ''}
  style="--main-background:{mainBackground};
  --before-tilt-background:{beforeTiltBackground};
  --after-tilt-background:{afterTiltBackground};--margin: {margin};
  --border-tilt-before:{borderTiltBefore}; --border-tilt-after:{borderTiltAfter}; --border-tilt:{borderTilt};"
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
    border-top: var(--border-tilt);
    border-bottom: var(--border-tilt);
  }
  .left-tilt:before,
  .both-tilt:before {
    z-index: -1;
    content: '';
    position: absolute;
    left: -4px;
    top: 0;
    height: 100%;
    width: 100%;
    background: var(--before-tilt-background);
    transform: skewX(-15deg);
    border-top: var(--border-tilt-before);
    border-left: var(--border-tilt-before);
    border-bottom: var(--border-tilt-before);
  }
  .right-tilt:after,
  .both-tilt:after {
    z-index: -1;
    content: '';
    position: absolute;
    left: 4px;
    top: 0;
    height: 100%;
    width: 100%;
    background: var(--after-tilt-background);
    transform: skewX(-345deg);
    border-top: var(--border-tilt-after);
    border-right: var(--border-tilt-after);
    border-bottom: var(--border-tilt-after);
  }
</style>
