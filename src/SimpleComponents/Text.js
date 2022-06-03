import styled from 'styled-components/native';
import {marginStyles, paddingStyles} from './padding&marginStyles';

export const StyledText = styled.Text`
  ${marginStyles};
  ${paddingStyles};
  ${({width}) => width && `width:${width}`}
  ${({bgc}) => bgc && `background-color:${bgc}`}
<<<<<<< HEAD
  ${({height}) => height && `height:${height}`}
=======
  ${({height}) => height && `width:${height}`}
>>>>>>> 28b29bd897b033207f12242e2b0bf75ec3697574
  ${({br}) => br && `border-radius:${br}`}
  ${({color}) => color && `color:${color}`}
  ${({fz}) => fz && `font-size:${fz}`}
  ${({textAlign}) => textAlign && `text-align:${textAlign}`}
<<<<<<< HEAD
    ${({borderWidth}) => borderWidth && `border-width:${borderWidth}`}
=======
>>>>>>> 28b29bd897b033207f12242e2b0bf75ec3697574
`;
