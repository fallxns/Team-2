import React, { useState } from 'react';
import {
  Box,
  Flex,
  Slider,
  SliderMark,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from '@chakra-ui/react';

function WorkloadSlider() {
  const [sliderValue, setSliderValue] = useState(5);

  const labelStyles = {
    mt: '7',
    ml: '-1',
    fontSize: 'large',
    fontWeight: 'bold',
    color: 'grey',
  };

  return (
    <Flex
      w="95%"
      justifyContent="center"
      alignItems={'center'}
      paddingTop="10px"
    >
      <Flex w="95%" minHeight={'80px'}>
        <Slider
          h="35%"
          borderRadius="10px"
          aria-label="slider-ex-6"
          onChange={(val) => setSliderValue(val)}
          step={1}
          min={1}
          max={10}
        >
          <SliderTrack h="10px" />
          <SliderFilledTrack borderRadius={'20px'} />
          <SliderThumb widht="30px" height="30px" border="1px" />
          <Box
            position="relative"
            w="100%"
            display="flex"
            justifyContent="space-between"
          >
            <Box className="chakra-slider__markers" /* add this class */>
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
  );
}

export default WorkloadSlider;
