<div class="container">
  <div class="cards">
    <div class="card" />
    <div class="card" />
    <div class="card" />
    <div class="card" />
    <div class="card" />
    <div class="card" />
  </div>
  <div class="stage" />
</div>

<style>
  .container {
    width: 60vw;
    margin: 0 auto;
  }
  .stage {
    background: brown;
    height: 50px;
    transform: skewX(-70deg);
  }
  .cards {
    display: inline-flex;
    position: relative;
    top: 30px;
    left: 50px;
    z-index: 1;
  }
  .card {
    width: 120px;
    height: 120px;
    background: blue;
    position: relative;
    transition: transform 0.5s;
    margin: 0 5px;
    display: flex;
    align-content: flex-end;
  }
  .card:hover {
    transform: translateY(-20px);
  }
</style>
