import { Card, CardBody, Flex } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto'; // Import from 'chart.js/auto' instead of 'chart.js'
import DividerProp from './dividerProp';

function Graph1Component() {
  // Sample data for the bar chart
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Man Hours',
        data: [8, 6, 7, 9, 5], // Replace with your actual data
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  // Chart options
  const options = {
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
      },
    },
  };

  return (
    <Flex w="100%" h="100%">
      <Card width="100%" shadow={'md'} variant={'outline'} h="100%">
        <CardBody h="100%" w="100%">
          <Flex fontWeight={'bold'} fontSize="large">
            Your Man Hours Worked This Week:
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

export default Graph1Component;
