import { SAVE_USER_SCREEN_ORDER_DATA } from "../actions/user-context";

const UserReducer = (state, action) => {

  if(action.type===SAVE_USER_SCREEN_ORDER_DATA){
    return {...state, orders: action.payload}
  }
  return state;
};

export default UserReducer;
