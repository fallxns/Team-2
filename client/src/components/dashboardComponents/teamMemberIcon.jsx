import { Avatar, Card, Flex } from '@chakra-ui/react';

function TeamMemberIcon({ name }) {
  return (
    <Flex height="100%" flexDirection={'row'} justifyContent={'center'}>
      <Card flexDirection={'row'} shadow={'md'} variant={'outline'}>
        <Flex justifyContent={'center'} alignItems={'center'}>
          <Avatar size="md" margin="10px" name={name}></Avatar>
        </Flex>
        <Flex
          justifyContent={'left'}
          alignItems={'center'}
          fontWeight={'bold'}
          fontSize="lg"
          margin="10px"
          marginLeft="0px"
        >
          {name}
        </Flex>
      </Card>
    </Flex>
  );
}

export default TeamMemberIcon;
