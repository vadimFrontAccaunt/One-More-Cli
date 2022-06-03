import styled from 'styled-components/native';
import {marginStyles, paddingStyles} from './padding&marginStyles';

export const StyledBlock = styled.View`
  ${marginStyles};
  ${paddingStyles};
  ${({width}) => width && `width:${width}`}
<<<<<<< HEAD
=======
  ${({display}) => display && `display:${display}`}
>>>>>>> 28b29bd897b033207f12242e2b0bf75ec3697574
  ${({justifyContent}) => justifyContent && `justify-content:${justifyContent}`}
  ${({flexDirection}) => flexDirection && `flex-direction:${flexDirection}`}
   ${({alignItems}) => alignItems && `align-items:${alignItems}`}
`;
