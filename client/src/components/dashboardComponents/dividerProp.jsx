import { Flex } from '@chakra-ui/react';

function DividerProp() {
  return (
    <Flex justifyContent="center">
      <Flex
        bgColor="blackAlpha.100"
        width="100%"
        h="2px"
        rounded={'3px'}
        boxShadow={'lg'}
        marginTop="10px"
        marginBottom="10px"
      ></Flex>
    </Flex>
  );
}

export default DividerProp;
