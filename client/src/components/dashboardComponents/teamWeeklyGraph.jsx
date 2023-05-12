import { Card, CardBody, Flex } from '@chakra-ui/react';
import DividerProp from './dividerProp';
import { Bar } from 'react-chartjs-2';

function TeamWeeklyGraph() {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Tasks Completed',
        data: [8, 6, 7, 9, 5], // Replace with your actual data
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Additional Data',
        data: [4, 6, 3, 8, 5], // Additional data for staggered bars
        backgroundColor: 'rgba(192, 75, 75, 0.6)',
        borderColor: 'rgba(192, 75, 75, 1)',
      },
    ],
  };

  // Chart options
  const options = {
    indexAxis: 'x', // Rotate bars to be vertical
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Flex w="100%" h="100%">
      <Card width="100%" shadow={'md'} variant={'outline'} h="100%">
        <CardBody h="100%" w="100%">
          <Flex fontWeight={'bold'} fontSize="large">
            Team A's Task Completion (Weekly):
          </Flex>
          <DividerProp />
          <Flex justifyContent={'center'} alignItems={'center'} height="80%" width="100%">
            <Bar data={data} options={options} />
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default TeamWeeklyGraph;
