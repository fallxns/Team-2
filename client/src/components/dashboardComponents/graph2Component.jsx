import React, { useState, useEffect } from 'react';
import { Card, CardBody, Flex } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import WorkloadSlider from './workloadSlider';

const Graph2Component = () => {
  const [sliderValue, setSliderValue] = useState(5);

  const handleSliderChange = (val) => {
    setSliderValue(val);
    console.log('Slider value:', val);
  };

  useEffect(() => {
    console.log('Received Variable:', sliderValue);
  }, [sliderValue]);

  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    datasets: [
      {
        label: 'Workload',
        data: [8, 6, 7, 9, sliderValue],
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
          <Flex w="95%" justifyContent="center" alignItems="center" paddingTop="10px">
            <WorkloadSlider
              sliderValue={sliderValue}
              handleSliderChange={handleSliderChange}
            />
          </Flex>
          <Flex w="100%" justifyContent="center" alignItems="center" paddingTop="30px">
            <Line data={data} options={options} />
          </Flex>
        </CardBody>
      </Card>
    </Flex>
  );
};

export default Graph2Component;