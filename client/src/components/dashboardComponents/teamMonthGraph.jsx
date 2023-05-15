import { Card, CardBody, Flex } from '@chakra-ui/react';
import DividerProp from './dividerProp';
import { Bar } from 'react-chartjs-2';
import React, { useState, useEffect } from 'react';

async function getTeamAMonthly() {
  try {
    // Fetch API endpoint for teamAmonth points
    const response = await fetch(`http://34.105.142.231:3001/api/teamAmonthly`);
    const data = await response.json(); // Parse the response as JSON

    // Get the API response
    let graphData = data;
    let dates = [];
    let values1 = [];
    let values2 = [];

    for (let point in graphData) {
      dates.push(graphData[point]['Date']);
      values1.push(graphData[point]['TaskComp']);
      values2.push(graphData[point]['TaskUnComp']);
    }

    let finalData = [dates, values1, values2];

    // Return points
    return finalData;
  } catch (error) {
    console.error('Error:', error);
  }
}

function TeamMonthGraph() {
  const [graphData, setGraphData] = useState([[], []]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTeamAMonthly();
      setGraphData(data);
    };
    fetchData();
  }, []);

  const data = {
    labels: graphData[0],
    datasets: [
      {
        label: 'Tasks Completed',
        data: graphData[1],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Tasks Uncompleted',
        data: graphData[2],
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
    <Flex w="100%" h="100%" minHeight="350px">
      <Card width="100%" shadow={'md'} variant={'outline'} h="100%">
        <CardBody h="100%" w="100%">
          <Flex fontWeight={'bold'} fontSize="large">
            Team A Monthly Task Completion
          </Flex>
          <DividerProp />
          <Flex
            justifyContent={'center'}
            alignItems={'center'}
            height="80%"
            width="100%"
          >
            <Bar data={data} options={options} />
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default TeamMonthGraph;
