import { GridItem, Grid } from '@chakra-ui/react';
import TeamWeeklyGraph from './teamWeeklyGraph';
// ofds fsdofos f
//sfs
import TeamMonthGraph from './teamMonthGraph';
import TeamMembersComponent from './teamMembersComponent';

function TeamDashboard() {
  return (
    <Grid
      templateRows="auto 1fr"
      templateColumns="repeat(8, 1fr)"
      columnGap={'2%'}
      rowGap={'6%'}
      width="100%"
    >
      {/* Profile Card */}
      <GridItem colSpan={8}>
        <TeamMembersComponent firstName="Luke"></TeamMembersComponent>
      </GridItem>

      {/* Graph 1 */}
      <GridItem colSpan={4} marginBottom="20px">
        <TeamWeeklyGraph></TeamWeeklyGraph>
      </GridItem>

      {/* Graph 2 */}
      <GridItem colSpan={4} marginBottom="20px">
        <TeamMonthGraph></TeamMonthGraph>
      </GridItem>
    </Grid>
  );
}

export default TeamDashboard;
