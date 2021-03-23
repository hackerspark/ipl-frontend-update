<script>
  export let text = 'Click Me!';
</script>

<div class="container" on:click>
  <div class="push-button">
    {text}
  </div>
</div>

<style>
  .container {
    width: 50px;
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
    background: #1f477e;
    box-shadow: 0 10px #02214d;
    padding: 5px;
  }
  .push-button:active {
    box-shadow: 0 0 #e24f4f;
    transform: translate(0px, 15px);
    transition: 0.1s all ease-out;
  }
  .push-button:hover {
    box-shadow: 0 0 #e24f4f;
    transform: translate(0px, 2px);
    transition: 0.1s all ease-out;
  }
</style>
