import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Button,
  Divider,
  Avatar,
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';

function ProfileCardComponent() {
  return (
    <Flex h="100%">
      <Card width="100%" shadow={'2xl'} variant={'outline'} h="100%">
        <CardBody>
          <Flex spacing="4">
            <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

              <Box>
                <Heading size="md">Angus Todd</Heading>
                <Flex>UX Designer</Flex>
              </Box>
            </Flex>
            <Button colorScheme="blue" variant="outline">
              Edit
            </Button>
          </Flex>
          <Divider h="20px" marginTop="1%" marginBottom="1%"></Divider>
          <Flex fontWeight={'bold'} fontSize={'large'}>
            Contact Details
          </Flex>
          <Flex direction={'column'} gap="2">
            <Flex gap={'4'} align={'center'}>
              <Flex>
                <EmailIcon color={'blue.500'} boxSize={'7'}></EmailIcon>
              </Flex>
              <Flex>angustodd@outlook.com</Flex>
            </Flex>
            <Flex gap={'4'} align={'center'}>
              <Flex>
                <PhoneIcon color={'blue.500'} boxSize={'7'}></PhoneIcon>
              </Flex>
              <Flex>+44 7462 973 355</Flex>
            </Flex>
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default ProfileCardComponent;
