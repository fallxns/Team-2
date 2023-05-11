import { Grid, GridItem } from '@chakra-ui/react';
import ProfileCardComponent from './profileCardComponent';
import WorkloadComponent from './workloadComponent';
import Graph1Component from './graph1Component';
import Graph2Component from './graph2Component';

function IndividualDashboard() {
  return (
    <Grid
      bgColor={'green.100'}
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(8, 1fr)"
      gap={4}
      width="100%"
    >
      {/* Profile Card */}
      <GridItem colSpan={3}>
        <ProfileCardComponent></ProfileCardComponent>
      </GridItem>

      <GridItem colSpan={5}>
        <WorkloadComponent></WorkloadComponent>
      </GridItem>

      {/* Graph 1 */}
      <GridItem colSpan={4}>
        <Graph1Component></Graph1Component>
      </GridItem>

      {/* Graph 2 */}
      <GridItem colSpan={4}>
        <Graph2Component></Graph2Component>
      </GridItem>
    </Grid>
  );
}

export default IndividualDashboard;
