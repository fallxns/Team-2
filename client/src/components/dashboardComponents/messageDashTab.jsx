import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Grid,
  GridItem,
  Card,
} from '@chakra-ui/react';

import ProfileCardComponent from './profileCardComponent';
import WorkloadComponent from './workloadComponent';
import MessagingDashboard from '../messagingDashboard';

function MessageDashTab() {
  return (
    <Flex
      width={'100%'}
      height={'100%'}
      margin={'10px'}
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
                <GridItem colSpan={3} bg="yellow.100">
                  <ProfileCardComponent></ProfileCardComponent>
                </GridItem>
                <GridItem colSpan={5} bg="papayawhip">
                  <Card>
                    <WorkloadComponent></WorkloadComponent>
                  </Card>
                </GridItem>
                <GridItem colSpan={4} bg="purple.100" />
                <GridItem colSpan={4} bg="red.100" />
              </Grid>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default MessageDashTab;
