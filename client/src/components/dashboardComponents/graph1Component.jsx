import { Card, CardBody, Flex } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto'; // Import from 'chart.js/auto' instead of 'chart.js'
import DividerProp from './dividerProp';
import React from 'react';

async function getLineGraph() {
  try {
    // Fetch API endpoint for linegraph points
    const response = await fetch(`http://35.246.6.37:3001/api/linegraph`);
    const data = await response.json(); // Parse the response as JSON

    // Get the API response
    let graphData = data;
    let dates = [];
    let values = [];

    for (let point in graphData) {
      dates.push(graphData[point]['Date']);
      values.push(graphData[point]['ManHrs']);
    }

    let finalData = [dates, values];

    // Return points
    return finalData;
  } catch (error) {
    console.error('Error:', error);
    return [[], []]; // Return empty arrays in case of error
  }
}

function Graph1Component() {
  const [graphData, setGraphData] = React.useState([[], []]);

  React.useEffect(() => {
    const fetchData = async () => {
      const data = await getLineGraph();
      setGraphData(data);
    };
    fetchData();
  }, []);

  const data = {
    labels: graphData[0],
    datasets: [
      {
        label: 'Man Hours',
        data: graphData[1],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

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
      <Card width="100%" shadow="md" variant="outline" h="100%">
        <CardBody h="100%" w="100%">
          <Flex fontWeight="bold" fontSize="large">
            Your Monthly Man Hours
          </Flex>
          <DividerProp />
          <Flex
            justifyContent="center"
            alignItems="center"
            height="80%"
            width="100%"
          >
            {graphData[0].length > 0 ? (
              <Bar data={data} options={options} />
            ) : (
              <div>Loading graph data...</div>
            )}
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
}

export default Graph1Component;
