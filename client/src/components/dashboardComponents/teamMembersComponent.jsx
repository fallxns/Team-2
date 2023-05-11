import { Card, CardBody, Flex } from '@chakra-ui/react';

import TeamMemberIcon from './teamMemberIcon';

// Team Members
const m1 = 'Angus Todd';
const m2 = 'Luke Sweeney';
const m3 = 'Charlie Kilner';
const m4 = 'Freddie Fallon';

function TeamMembersComponent() {
  return (
    <Flex>
      <Flex flexDirection={'row'} gap="20px">
        <TeamMemberIcon name={m1}></TeamMemberIcon>
        <TeamMemberIcon name={m2}></TeamMemberIcon>
        <TeamMemberIcon name={m3}></TeamMemberIcon>
        <TeamMemberIcon name={m4}></TeamMemberIcon>
      </Flex>
    </Flex>
  );
}

export default TeamMembersComponent;
