import { Grid, GridItem, Flex } from '@chakra-ui/react';
import React, { useState } from 'react';
import ProfileCardComponent from './profileCardComponent';
import Graph1Component from './graph1Component';
import Graph2Component from './graph2Component';

function IndividualDashboard() {
  const [sliderValue, setSliderValue] = useState(5);
  const [graphData, setGraphData] = useState([[], []]); // Added state for graph data

  return (
    <Flex width="100%">
      <Grid
        w="100%"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(8, 1fr)"
        gap={4}
      >
        {/* Profile Card */}
        <GridItem rowSpan={1} colSpan={3}>
          <ProfileCardComponent />
        </GridItem>

        {/* Graph 1 */}
        <GridItem rowStart={2} colSpan={3}>
          <Graph1Component />
        </GridItem>

        {/* Graph 2 */}
        <GridItem rowSpan={2} colSpan={5}>
          <Graph2Component />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default IndividualDashboard;
