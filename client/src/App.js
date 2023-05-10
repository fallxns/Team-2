import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import { Center, ChakraProvider } from '@chakra-ui/react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Grid, GridItem } from '@chakra-ui/react';
import { BeakerIcon } from '@heroicons/react/24/solid';
import { AddIcon } from '@chakra-ui/icons';
import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  IconButton,
  WrapItem,
  Flex,
  Spacer,
  Input,
  Button,
  ButtonGroup,
} from '@chakra-ui/react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider className="mainApp">
      <Grid
        templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
        gridTemplateRows={'50px 50px 30px'}
        gridTemplateColumns={'30% 70%'}
        h="screen"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem area={'header'}>
          <Grid templateColumns="repeat(3, 1fr)" gap={6}>
            <GridItem w="100%" h="10" textAlign="left" pl="20px">
              Make-It-All
            </GridItem>
            <GridItem w="100%" h="10">
              <Center w="100%">
                <Tabs>
                  <TabList>
                    <Tab fontSize="2xl" color="#0147FF">
                      Messages
                    </Tab>
                    <Tab fontSize="2xl">Data Dashboard</Tab>
                  </TabList>

                  <TabPanels>
                    <TabPanel>
                      <p>Messages</p>
                    </TabPanel>
                    <TabPanel>
                      <p>Data Dashboard</p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              </Center>
            </GridItem>
            <GridItem w="100%" h="100%" textAlign="right" pr="30px">
              Angus Todd
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem pl="2" bg="white" area={'nav'}>
          <Card variant="unstyled">
            <CardHeader pb="20px" pt="0">
              <Heading size="lg" pb="20px" color="#0147FF">
                Messages
              </Heading>
              {/* grid rows to make a new message button */}
              <Flex color="white">
                <Input
                  variant="outline"
                  placeholder="Search or start a new chat"
                  borderRadius="0"
                  pl="5px"
                />
                <IconButton
                  ml="6px"
                  borderRadius="0"
                  bg="#0147FF"
                  aria-label="Search database"
                  icon={<AddIcon />}
                />
              </Flex>
            </CardHeader>

            <CardBody w="100%" borderRight="1px" borderColor="#e2e8f0">
              <Stack divider={<StackDivider />} spacing="4">
                <Box>
                  <Grid
                    h="20px"
                    pb="40px"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={4}
                  >
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
                    </GridItem>
                    <GridItem colSpan={4}></GridItem>
                  </Grid>
                </Box>
                <Box>
                  <Grid
                    h="20px"
                    pb="40px"
                    templateRows="repeat(2, 1fr)"
                    templateColumns="repeat(5, 1fr)"
                    gap={4}
                  >
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
                          5+
                        </Text>
                      </Flex>
                    </GridItem>
                  </Grid>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem
          pl="0"
          bg=""
          area={'footer'}
          pr="20px"
          pos="bottom"
          className="footer"
          borderTopWidth="75vh"
        >
          <Flex
            minWidth="max-content"
            alignItems="center"
            gap="2"
            className="footer"
          >
            <Box p="2" w="100%">
              <Input
                variant="outline"
                placeholder="Say something..."
                w="100%"
                borderRadius="0px"
                bg="#edf0f4"
                color="black"
              />
            </Box>
            <ButtonGroup gap="2">
              <Button bg="#0147FF" color="white" borderRadius="0px">
                Send
              </Button>
            </ButtonGroup>
          </Flex>
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default App;
