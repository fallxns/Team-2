import { Card, CardBody, Flex } from '@chakra-ui/react';
import DividerProp from './dividerProp';

function TeamWeeklyGraph() {
  return (
    <Flex width="100%" height="100%">
      <Card w="100%" boxShadow={'md'}>
        <CardBody>
          <Flex flexDirection={'column'}>
            <Flex fontWeight={'bold'} fontSize="large">
              This Weeks Workload
            </Flex>
            <DividerProp></DividerProp>
            <Flex justifyContent={'center'} alignItems={'center'}>
              [insert weekly workload graph here]
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default TeamWeeklyGraph;
