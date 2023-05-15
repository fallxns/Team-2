import {
  Avatar,
  Flex,
  Box,
  Heading,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from '@chakra-ui/react';

import { EmailIcon, PhoneIcon } from '@chakra-ui/icons';
import DividerProp from './dividerProp';

function TeamMemberIcon({ member }) {
  return (
    <Flex height="100%" flexDirection={'row'} justifyContent={'center'}>
      <Popover>
        <PopoverTrigger>
          <Flex
            flexDirection={'row'}
            shadow={'md'}
            _hover={{ cursor: 'pointer' }}
            alignItems={'center'}
            p="2"
          >
            <Avatar size="md" margin="10px" name={member.name}></Avatar>
            <Flex
              flexDirection={'column'}
              justifyContent={'left'}
              alignItems={'start'}
              fontWeight={'bold'}
              fontSize="lg"
              marginLeft="0px"
            >
              <Box>{member.name}</Box>
              <Box fontSize="sm">{member.role}</Box>
            </Flex>
          </Flex>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader></PopoverHeader>
          <PopoverBody>
            <Flex direction={'column'} width="100%" margin="10px">
              <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                <Avatar name={member.name} />
                <Box>
                  <Heading size="md">{member.name}</Heading>
                  <Flex>{member.role}</Flex>
                </Box>
              </Flex>
              <DividerProp marginRight="10px" />
              <Flex fontWeight={'bold'} fontSize={'large'}>
                Contact Details
              </Flex>
              <Flex direction={'column'} gap="2">
                <Flex gap={'4'} align={'center'}>
                  <EmailIcon color={'blue.500'} boxSize={'7'}></EmailIcon>
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </Flex>
                <Flex gap={'4'} align={'center'}>
                  <Flex>
                    <PhoneIcon color={'blue.500'} boxSize={'7'}></PhoneIcon>
                  </Flex>
                  <Flex>{member.phone}</Flex>
                </Flex>
              </Flex>
            </Flex>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  );
}

export default TeamMemberIcon;
