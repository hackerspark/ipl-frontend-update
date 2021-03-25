<script>
</script>

<div class="parent">
  <div class="table-container">
    <div class="table">
      <div class="row">
        <div>Apple</div>
        <img src="/gavel-solid.png" alt="bid" />
      </div>
      <div class="row">
        <div>Apple</div>
        <img src="/gavel-solid.png" alt="bid" />
      </div>
      <div class="row">
        <div>Apple</div>
        <img src="/gavel-solid.png" alt="bid" />
      </div>
      <div class="row">
        <div>Apple</div>
        <img src="/gavel-solid.png" alt="bid" />
      </div>
      <div class="row">
        <div>Apple</div>
        <img src="/gavel-solid.png" alt="bid" />
      </div>
      <div class="row">
        <div>Apple</div>
        <img src="/gavel-solid.png" alt="bid" />
      </div>
      <div class="row">
        <div>Apple</div>
        <img src="/gavel-solid.png" alt="bid" />
      </div>
    </div>
  </div>
  <div class="container">
    <ul>
      <li title="Batsman">
        <img src="/cricket-bat.png" alt />
      </li>
      <li title="Bowler">
        <img src="/cricket-ball.png" alt />
      </li>
      <li class="selected" title="All Rounder">
        <img src="all-rounder.png" alt />
      </li>
      <li title="Wicket Keeper">
        <img src="/wicket-keeper.png" alt />
      </li>
    </ul>
  </div>
</div>

<style>
  .container {
    float: left;
    padding-top: 10%;
  }
  .container ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 60px;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    box-shadow: 1px 5px 2px rgba(0, 0, 0, 0.3);
  }
  .container li {
    background: rgb(221, 221, 221, 1);
    width: 60px;
    padding: 15px;
    /* 		margin: 5px; */
    cursor: pointer;
    border-bottom: solid 1px;
  }
  .container li:hover,
  .container li.selected {
    background: #efefef;
  }
  .container li:first-of-type {
    border-top-right-radius: 15px;
  }
  .container li:last-of-type {
    border-bottom-right-radius: 15px;
    border-bottom: none;
  }
  .container img {
    width: 24px;
  }

  .table-container {
    float: left;
    width: 250px;
    height: 100%;
    /* 		border: solid black 1px; */
    border-radius: 12px;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    overflow-y: hidden;
    box-shadow: 4px 5px 2px rgba(112, 2, 2, 0.7);
  }
  .parent {
    height: 360px;
  }
  .table {
    display: grid;
    grid-template-columns: 100%;
    overflow-y: auto;
    background: rgba(112, 2, 2, 0.4);
  }
  .row {
    display: grid;
    grid-template-columns: 70% 30%;
    overflow-y: auto;
    padding: 20px;
  }
  .row:hover {
    background: rgba(99, 29, 29, 0.7);
  }
  .row img {
    border: solid 1px;
    padding: 5px;
    border-radius: 50%;
  }
  .row img:active {
    background: white;
  }
</style>
