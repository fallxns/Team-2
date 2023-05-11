import { Flex, Card, Divider, CardBody } from '@chakra-ui/react';

import DividerProp from './dividerProp';
import WorkloadSlider from './workloadSlider';

function WorkloadComponent() {
  return (
    <Flex height="100%">
      <Card
        width="100%"
        height="100%"
        shadow={'xl'}
        variant={'outline'}
        marginBottom="0px"
      >
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
          <DividerProp></DividerProp>
          <Flex justifyContent="center" alignItems={'center'} minHeight="120px">
            <WorkloadSlider></WorkloadSlider>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default WorkloadComponent;
