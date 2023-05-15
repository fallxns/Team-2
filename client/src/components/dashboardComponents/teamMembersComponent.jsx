import { Flex } from '@chakra-ui/react';
import TeamMemberIcon from './teamMemberIcon';

function TeamMembersComponent() {
  const teamMembers = [
    {
      name: 'Angus Todd',
      role: 'Developer',
      email: 'angus@example.com',
      phone: '123-456-7890',
    },
    {
      name: 'Luke Sweeney',
      role: 'Designer',
      email: 'luke@example.com',
      phone: '234-567-8901',
    },
    {
      name: 'Charlie Kilner',
      role: 'Project Manager',
      email: 'charlie@example.com',
      phone: '345-678-9012',
    },
    {
      name: 'Freddie Fallon',
      role: 'Product Owner',
      email: 'freddie@example.com',
      phone: '456-789-0123',
    },
  ];

  return (
    <Flex flexDirection={'row'} gap="20px">
      {teamMembers.map((member) => (
        <TeamMemberIcon key={member.name} member={member}></TeamMemberIcon>
      ))}
    </Flex>
  );
}

export default TeamMembersComponent;
