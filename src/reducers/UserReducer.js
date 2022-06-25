import {
  HANDLE_ORDER,
  HANDLE_ORDER_DESCRIPTION,
  SAVE_USER_SCREEN_ORDER_DATA,
} from "../actions/user-context";

const UserReducer = (state, action) => {
  if (action.type === SAVE_USER_SCREEN_ORDER_DATA) {
    return { ...state, orders: action.payload };
  }
  if (action.type === HANDLE_ORDER) {
    const { id, entry } = action.payload;
    const tempItems = state.newOrder.allItems.filter((item) => {
      return item.id !== id;
    });

    return {
      ...state,
      newOrder: { ...state.newOrder, allItems: [...tempItems, entry] },
    };
  }

  if(action.type=== HANDLE_ORDER_DESCRIPTION){
    return {...state, newOrder: {...state.newOrder, orderDescription: action.payload}}
  }
  return state;
};

export default UserReducer;
