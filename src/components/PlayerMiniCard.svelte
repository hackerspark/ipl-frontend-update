<script>
  import PushButton from './PushButton.svelte';
  export let player = {};
</script>

<div class="grid-container">
  <div class="name-container">
    <h4>M.S Dhoni</h4>
  </div>
  <div class="attribute-container">
    <div class="label-container">Base Price</div>
    <div class="label-container-2">Critics Rating</div>
    <div class="value-container">1234</div>
    <div class="value-container-2">5678</div>
  </div>
  <div class="button-container">
    <PushButton>Click Me</PushButton>
  </div>
  <div class="empty-container" />
</div>

<style>
  .grid-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 20px;
    gap: 0px 0px;
    grid-template-areas:
      'name-container name-container name-container'
      'attribute-container attribute-container button-container'
      'empty-container empty-container empty-container';
    background: black;
    width: 400px;
  }

  .name-container {
    grid-area: name-container;
    margin-left: 5px;
  }

  .attribute-container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 0px 0px;
    grid-template-areas:
      'label-container label-container value-container'
      'label-container-2 label-container-2 value-container-2';
    grid-area: attribute-container;
  }

  .label-container {
    grid-area: label-container;
    margin-left: 5px;
  }

  .label-container-2 {
    grid-area: label-container-2;
    margin-left: 5px;
  }

  .value-container {
    grid-area: value-container;
  }

  .value-container-2 {
    grid-area: value-container-2;
  }

  .empty-container {
    grid-area: empty-container;
  }

  .button-container {
    grid-area: button-container;
  }
</style>
