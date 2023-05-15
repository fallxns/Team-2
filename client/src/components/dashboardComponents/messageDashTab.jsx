import { useState } from 'react';
import {
  Flex,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Grid,
  GridItem,
  Switch,
  Card,
} from '@chakra-ui/react';

import MessagingDashboard from '../messagingDashboard';
import IndividualDashboard from './individualDashboard';
import TeamDashboard from './teamDashboard';

function MessageDashTab({ socket }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

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
            <MessagingDashboard socket={socket} />
          </TabPanel>

          {/* Dashboard Tab (Luke) */}
          <TabPanel>
            <Flex>
              <Flex
                // bgColor={'red.100'}
                width="50%"
                fontSize={'x-large'}
                fontWeight={'bold'}
                marginBottom="10px"
              >
                {toggle ? 'Team Dashboard' : 'My Dashboard'}
              </Flex>
              <Flex
                justifyContent={'right'}
                alignItems={'Center'}
                width="50%"

                // bgColor={'blue.100'}
              >
                <Switch isChecked={toggle} onChange={handleToggle} size="lg" />
              </Flex>
            </Flex>
            <Flex width="100%">
              {toggle ? (
                <TeamDashboard></TeamDashboard>
              ) : (
                <IndividualDashboard></IndividualDashboard>
              )}
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
  );
}

export default MessageDashTab;
