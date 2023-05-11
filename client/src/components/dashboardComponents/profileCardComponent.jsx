import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Button,
  Avatar,
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import DividerProp from './dividerProp';

function ProfileCardComponent() {
  const name = 'Angus Todd';
  const role = 'UX Designer';
  const userEmail = 'angustodd@outlook.com';
  const userPhoneNum = '+44 7462 973 355';

  return (
    <Flex height="100%">
      <Card width="100%" shadow={'md'} variant={'outline'}>
        <CardBody>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name={name} />

              <Box>
                <Heading size="md">{name}</Heading>
                <Flex>{role}</Flex>
              </Box>
            </Flex>
            <Button colorScheme="blue" variant="outline">
              Edit
            </Button>
          </Flex>
          <DividerProp />
          <Flex fontWeight={'bold'} fontSize={'large'}>
            Contact Details
          </Flex>
          <Flex direction={'column'} gap="2">
            <Flex gap={'4'} align={'center'}>
              <Flex>
                <EmailIcon color={'blue.500'} boxSize={'7'}></EmailIcon>
              </Flex>
              <Flex>{userEmail}</Flex>
            </Flex>
            <Flex gap={'4'} align={'center'}>
              <Flex>
                <PhoneIcon color={'blue.500'} boxSize={'7'}></PhoneIcon>
              </Flex>
              <Flex>{userPhoneNum}</Flex>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default ProfileCardComponent;
