import { Card, CardBody, Flex, Divider } from '@chakra-ui/react';
import DividerProp from './dividerProp';

function Graph2Component() {
  return (
    <Flex w="100%" h="100%">
      <Card width="100%" shadow={'md'} variant={'outline'} h="100%">
        <CardBody h="400px">
          <Flex fontWeight={'bold'} fontSize="large">
            Graph 2
          </Flex>
          <DividerProp></DividerProp>
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            width="100%"
            height="80%"
          >
            [insert graph 2 here]
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Graph2Component;
