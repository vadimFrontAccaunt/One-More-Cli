import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {StyledText} from '../SimpleComponents/Text';

const RandomScreen = () => {
  const [randomNumber, setRandomNumber] = useState(0);
  const [statusError, setStatusError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      let number = Math.random().toFixed(1) * 10;
      if (number > 4) {
        setStatusError(false);
        setRandomNumber(randomNumber => randomNumber + 1);
      } else {
        setStatusError(true);
        setRandomNumber(0);
      }
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View>
      <StyledText textAlign="center" fz="18px">
        Random Number
      </StyledText>

      <StyledText textAlign="center" fz="18px">
        {(statusError && (
          <StyledText textAlign="center" fz="18px">
            Error
          </StyledText>
        )) ||
          randomNumber}
      </StyledText>
    </View>
  );
};

export default RandomScreen;
