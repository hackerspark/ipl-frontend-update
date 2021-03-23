<script>
  import { Row, Column } from 'carbon-components-svelte';

  //   export let player = {};
</script>

<div style="width:300px;linear-gradient(180deg,#f50 -20%,rgba(255,85,0,0) 52%)">
  <Row padding>
    <Column lg={16}>
      <img
        src="https://resources.pulse.icc-cricket.com/players/284/1.png"
        alt="Virat"
      />
    </Column>
  </Row>
  <Row padding>
    <Column lg={8}>Name</Column>
    <Column lg={8}>MS Dhoni</Column>
  </Row>
  <Row padding>
    <Column lg={8}>DOB</Column>
    <Column lg={8}>07 July 1981</Column>
  </Row>
  <Row padding>
    <Column lg={8}>Role</Column>
    <Column lg={8}>Wicket keeper</Column>
  </Row>
  <Row padding>
    <Column lg={6}>Matches</Column>
    <Column lg={5}>Runs</Column>
    <Column lg={5}>Wickets</Column>
  </Row>
  <Row padding>
    <Column lg={6}><h3>15</h3></Column>
    <Column lg={5}><h3>416</h3></Column>
    <Column lg={5}><h3>0</h3></Column>
  </Row>
</div>
