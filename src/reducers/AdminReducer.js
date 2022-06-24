import { SAVE_USER_SCREEN_ORDER_DATA } from "../actions/admin-context";

const AdminReducer = (state, action) => {

  if(action.type===SAVE_USER_SCREEN_ORDER_DATA){
    return {...state, orders: action.payload}
  }
  return state;
};

export default AdminReducer;
