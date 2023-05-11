import { Card, CardBody, Flex } from '@chakra-ui/react';
import DividerProp from './dividerProp';

function TeamMonthGraph() {
  return (
    <Flex width="100%" height="100%">
      <Card w="100%" shadow={'md'} variant={'outline'}>
        <CardBody>
          <Flex flexDirection={'column'}>
            <Flex fontWeight={'bold'} fontSize="large">
              This Months Workload
            </Flex>
            <DividerProp></DividerProp>
            <Flex justifyContent={'center'} alignItems={'center'}>
              [insert monthly workload graph here]
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default TeamMonthGraph;
