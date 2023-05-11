import { Card, CardBody, Flex } from '@chakra-ui/react';

import DividerProp from './dividerProp';

function Graph1Component() {
  return (
    <Flex w="100%" h="100%">
      <Card width="100%" shadow={'md'} variant={'outline'} h="100%">
        <CardBody h="100%" w="100%">
          <Flex fontWeight={'bold'} fontSize="large">
            Graph 1
          </Flex>
          <DividerProp></DividerProp>
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            height="80%"
            width="100%"
          >
            [insert graph 1 here]
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Graph1Component;
