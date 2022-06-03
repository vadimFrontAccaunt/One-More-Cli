import styled from 'styled-components/native';
import {marginStyles, paddingStyles} from './padding&marginStyles';

export const StyledPressable = styled.Pressable`
  ${marginStyles};
  ${paddingStyles};
  ${({width}) => width && `width:${width}`}
  ${({bgc}) => bgc && `background-color:${bgc}`}
  ${({height}) => height && `width:${height}`}
  ${({br}) => br && `border-radius:${br}`}
  ${({color}) => color && `color:${color}`}
  ${({fz}) => fz && `font-size:${fz}`}
  ${({textAlign}) => textAlign && `text-align:${textAlign}`}
  ${({borderWidth}) => borderWidth && `border-width:${borderWidth}`}
`;
