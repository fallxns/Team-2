import { Card, CardBody, Flex, Divider } from '@chakra-ui/react';
import DividerProp from './dividerProp';

function Graph2Component() {
  return (
    <Flex w="100%" h="100%" paddingBottom="30px">
      <Card width="100%" shadow={'xl'} variant={'outline'} h="100%">
        <CardBody h="100%" w="100%">
          <Flex fontWeight={'bold'} fontSize="large">
            Graph 2
          </Flex>
          <DividerProp></DividerProp>
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            height="85%"
            width="100%"
            overflow="hidden"
          >
            [insert graph 2 here]
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Graph2Component;
