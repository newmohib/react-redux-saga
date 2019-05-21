
import { AGE_UP,AGE_DOWN } from "./constants";
 
 export const mapDispachToProps = dispatch => {
    return {
      onAgeUp: (number) => dispatch({ type: AGE_UP, value: number }),
      onAgeDown: (number) => dispatch({ type: AGE_DOWN, value: number })
    };
  };