import React, { useState, useEffect } from 'react';
import { Card, CardBody, Flex, Slider, SliderMark, SliderTrack, SliderFilledTrack, SliderThumb, Box } from '@chakra-ui/react';
import { Line } from 'react-chartjs-2';
import DividerProp from './dividerProp';

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

  const labelStyles = {
    mt: '7',
    ml: '-1',
    fontSize: 'large',
    fontWeight: 'bold',
    color: 'grey',

  };

  return (
    <Flex w="100%" h="100%">
      <Card width="100%" shadow="md" variant="outline" h="100%">
        <CardBody h="100%" w="100%">
          <Flex w="95%" justifyContent="center" alignItems="center" paddingTop="10px">
            <Flex w="95%" minHeight="80px">
              <Slider
                h="35%"
                borderRadius="10px"
                aria-label="slider-ex-6"
                onChange={(val) => handleSliderChange(val)}
                step={1}
                min={1}
                max={10}
                value={sliderValue}
              >
                <SliderTrack h="10px" />
                <SliderFilledTrack borderRadius="20px" />
                <SliderThumb width="30px" height="30px" border="1px" />
                <Box
                  position="relative"
                  w="100%"
                  display="flex"
                  justifyContent="space-between"
                >
                  <Box className="chakra-slider__markers">
                    <SliderMark value={1} {...labelStyles}>
                      1
                    </SliderMark>
      
                    <SliderMark value={2} {...labelStyles}>
                      2
                    </SliderMark>
      
                    <SliderMark value={3} {...labelStyles}>
                      3
                    </SliderMark>
      
                    <SliderMark value={4} {...labelStyles}>
                      4
                    </SliderMark>
      
                    <SliderMark value={5} {...labelStyles}>
                      5
                    </SliderMark>
      
                    <SliderMark value={6} {...labelStyles}>
                      6
                    </SliderMark>
      
                    <SliderMark value={7} {...labelStyles}>
                      7
                    </SliderMark>
      
                    <SliderMark value={8} {...labelStyles}>
                      8
                    </SliderMark>
      
                    <SliderMark value={9} {...labelStyles}>
                      9
                    </SliderMark>
      
                    <SliderMark value={10} {...labelStyles}>
                      10
                    </SliderMark>
                  </Box>
                </Box>
              </Slider>
            </Flex>
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
