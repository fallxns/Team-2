import { Flex, Card, Divider, CardBody } from '@chakra-ui/react';

import WorkloadSlider from '../workloadSlider';

function WorkloadComponent() {
  return (
    <Flex h="100%">
      <Card shadow={'2xl'} variant={'outline'} h="100%" minWidth={'100%'}>
        <CardBody>
          <Flex spacing="4">
            <Flex
              fontSize={'large'}
              fontWeight={'bold'}
              flex="1"
              gap="4"
              alignItems="center"
              flexWrap="wrap"
            >
              Rate how your workload has been this week.
            </Flex>
          </Flex>
          <Divider margin="5%"></Divider>
          <WorkloadSlider></WorkloadSlider>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default WorkloadComponent;
