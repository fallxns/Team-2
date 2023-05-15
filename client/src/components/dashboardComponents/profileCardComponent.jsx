import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Button,
  Avatar,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import DividerProp from './dividerProp';
import { useState } from 'react';

function ProfileCardComponent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState('angustodd@outlook.com');
  const [phone, setPhone] = useState('+44 7462 973 355');
  const name = 'Angus Todd';
  const role = 'UX Designer';

  const saveChanges = () => {
    const emailInput = document.getElementById('email').value;
    const phoneInput = document.getElementById('phone').value;

    setEmail(emailInput);
    setPhone(phoneInput);

    onClose();
  };

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
            <Button colorScheme="blue" variant="outline" onClick={onOpen}>
              Edit
            </Button>
          </Flex>
          <DividerProp />
          <Flex fontWeight={'bold'} fontSize={'large'}>
            Contact Details
          </Flex>
          <Flex direction={'column'} gap="2">
            <Flex gap={'4'} align={'center'}>
              <EmailIcon color={'blue.500'} boxSize={'7'}></EmailIcon>
              <a href={`mailto:${email}`}>{email}</a>
            </Flex>
            <Flex gap={'4'} align={'center'}>
              <Flex>
                <PhoneIcon color={'blue.500'} boxSize={'7'}></PhoneIcon>
              </Flex>
              <Flex>{phone}</Flex>
            </Flex>
          </Flex>
        </CardBody>
      </Card>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              marginTop="3px"
              fontWeight={'bold'}
              fontSize={'x-large'}
              color={'blue.600'}
            >
              Edit Profile
            </Flex>
            <DividerProp marginTop="0px"></DividerProp>

            <FormControl id="upload-photo">
              <FormLabel alignItems={'center'}>
                Update Profile Picture
              </FormLabel>
              <Input type="file" accept="image/*" />
            </FormControl>
            <Flex h="10px"></Flex>
            <FormControl id="email-control">
              <FormLabel>Email Address</FormLabel>
              <Input id="email" type="email" defaultValue={email} />
            </FormControl>
            <Flex h="10px"></Flex>
            <FormControl id="phone-control">
              <FormLabel>Phone Number</FormLabel>
              <Input id="phone" type="tel" defaultValue={phone} />
            </FormControl>
            <Flex h="10px"></Flex>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost" onClick={saveChanges}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
}

export default ProfileCardComponent;
