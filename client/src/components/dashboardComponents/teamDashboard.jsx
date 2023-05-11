import { Flex, GridItem, Grid } from '@chakra-ui/react';
import TeamWeeklyGraph from './teamWeeklyGraph';
import ProfileCardComponent from './profileCardComponent';
import Graph1Component from './graph1Component';
import Graph2Component from './graph2Component';
import WorkloadComponent from './workloadComponent';

function TeamDashboard() {
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
        <TeamWeeklyGraph></TeamWeeklyGraph>
      </GridItem>

      {/* Graph 2 */}
      <GridItem colSpan={4}>
        <Graph2Component></Graph2Component>
      </GridItem>
    </Grid>
  );
}

export default TeamDashboard;
