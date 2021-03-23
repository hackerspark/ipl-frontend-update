<script>
  import { Row, Column, AccordionItem } from 'carbon-components-svelte';
  export let team = {};
</script>

<AccordionItem title={team.name}>
  <Row>
    <Column lg={11}>
      Total Players (<span style="color: red">{team.counts.total}</span>)
    </Column>
    <Column lg={5}>
      Balance Amount (<span style="color: red">{team.balanceAmount}</span>)
    </Column>
  </Row>
  <Row padding>
    <Column>Batsmen ({team.counts.batsmen})</Column>
    <Column>Bowler ({team.counts.bowler})</Column>
    <Column>All Rounder ({team.counts.allrounder})</Column>
    <Column>Wicket Keeper ({team.counts.wicketkeeper})</Column>
  </Row>
</AccordionItem>
