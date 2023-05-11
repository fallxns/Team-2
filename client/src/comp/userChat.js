function userChat(){
    return
<GridItem rowSpan={2} colSpan={1}>
                      <Center>
                        <WrapItem>
                          <Avatar
                            name="Dan Abrahmov"
                            src="https://bit.ly/dan-abramov"
                          />
                        </WrapItem>
                      </Center>
                    </GridItem>
                    <GridItem colSpan={4}>
                      <Flex minWidth="max-content" alignItems="center" gap="2">
                        <Heading size="xs" textTransform="uppercase">
                          Charlie kilner
                        </Heading>
                        <Spacer />
                        <Text
                          gap="2"
                          fontSize="xs"
                          textTransform="uppercase"
                          fontWeight="400"
                          pr="10px"
                        >
                          3 min ago
                        </Text>
                      </Flex>
                      <Flex minWidth="max-content" alignItems="center" gap="2">
                        <Text pt="0" fontSize="sm" fontWeight="400">
                          Preview of the text message goes here.
                        </Text>
                        <Spacer />
                        <Text
                          gap="2"
                          fontSize="xs"
                          textTransform="uppercase"
                          fontWeight="400"
                          mr="10px"
                          bg="green.200"
                          borderColor="green.400"
                          borderRadius="full"
                          pr="5px"
                          pl="5px"
                        >
                          <BeakerIcon className="h-6 w-6 text-blue-500" />
                        </Text>
                      </Flex>
                    </GridItem>;

}