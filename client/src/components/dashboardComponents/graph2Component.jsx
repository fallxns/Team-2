import React, { useState, useEffect } from 'react';
import { Card, CardBody, Flex } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import WorkloadSlider from './workloadSlider';
import DividerProp from './dividerProp';

async function getWorkloadGraph() {
  try {
    // Fetch API endpoint for workloadgraph points
    const response = await fetch(`http://35.246.6.37:3001/api/workloadgraph`);
    const data = await response.json(); // Parse the response as JSON

    // Get the API response
    let graphData = data;
    let dates = [];
    let values = [];

    for (let point in graphData) {
      dates.push(graphData[point]['Date']);
      values.push(graphData[point]['Workload']);
    }

    let finalData = [dates, values];

    // Return points
    return finalData;
  } catch (error) {
    console.error('Error:', error);
  }
}

const Graph2Component = () => {
  const [sliderValue, setSliderValue] = useState(5);
  const [graphData, setGraphData] = useState([[], []]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWorkloadGraph();
      setGraphData(data);
    };
    fetchData();
  }, []);

  const handleSliderChange = (val) => {
    setSliderValue(val);
    console.log('Slider value:', val);
  };

  useEffect(() => {
    console.log('Received Variable:', sliderValue);
  }, [sliderValue]);

  useEffect(() => {
    if (graphData.length > 0) {
      const updatedData = [...graphData];
      updatedData[1][updatedData[1].length - 1] = sliderValue;
      setGraphData(updatedData);
    }
  }, [sliderValue]);

  const data = {
    labels: graphData[0],
    datasets: [
      {
        label: 'Workload',
        data: graphData[1],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
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
            Rank Your Workload This Week
          </Flex>
          <DividerProp></DividerProp>
          <Flex
            w="95%"
            justifyContent="center"
            alignItems="center"
            paddingTop="10px"
            flexDirection={'row'}
          >
            <WorkloadSlider
              sliderValue={sliderValue}
              handleSliderChange={handleSliderChange}
            />
          </Flex>
          <DividerProp></DividerProp>
          <Flex
            w="100%"
            justifyContent="center"
            alignItems="center"
            paddingTop="30px"
          >
            <Line data={data} options={options} />
          </Flex>
        </CardBody>
      </Card>
      <DividerProp></DividerProp>
    </Flex>
  );
};

export default Graph2Component;
