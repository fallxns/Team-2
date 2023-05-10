import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Grid,
  GridItem,
} from '@chakra-ui/react';

import ProfileCardComponent from './profileCardComponent';
import WorkloadComponent from './workloadComponent';
import MessagingDashboard from '../messagingDashboard';
import Graph1Component from './graph1Component';
import Graph2Component from './graph2Component';

function MessageDashTab() {
  return (
    <Flex
      width={'100%'}
      padding={'10px'}
      marginRight="5%"
      marginLeft="5%"
      borderRadius={'12px'}
      borderColor={'grey'}
      flexDirection={'column'}
    >
      <Tabs>
        <TabList justifyContent={'center'}>
          <Tab flex={1}>
            <Flex fontWeight={'Bold'} fontSize={'x-large'}>
              Messages
            </Flex>
          </Tab>
          <Tab flex={1}>
            <Flex fontWeight={'bold'} fontSize={'x-large'}>
              Dashboard
            </Flex>
          </Tab>
        </TabList>

        <TabPanels>
          {/* Messaging Tab (Charlie) */}
          <TabPanel>
            <MessagingDashboard></MessagingDashboard>
          </TabPanel>

          {/* Dashboard Tab (Luke) */}
          <TabPanel>
            <Flex width="100%">
              <Grid
                h="400px"
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(8, 1fr)"
                gap={4}
                width="100%"
              >
                {/* Profile Card */}
                <GridItem colSpan={3}>
                  <ProfileCardComponent></ProfileCardComponent>
                </GridItem>

                {/* Workload slider card */}
                <GridItem colSpan={5}>
                  <WorkloadComponent></WorkloadComponent>
                </GridItem>

                {/* Graph 1 */}
                <GridItem colSpan={4} minHeight="250px">
                  <Graph1Component></Graph1Component>
                </GridItem>

                {/* Graph 2 */}
                <GridItem colSpan={4} minHeight="250px">
                  <Graph2Component></Graph2Component>
                </GridItem>
              </Grid>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default MessageDashTab;
