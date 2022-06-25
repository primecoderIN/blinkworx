import {
  HANDLE_CHECKBOX,
  HANDLE_ORDER,
  HANDLE_ORDER_DESCRIPTION,
  HIDE_SPINNER,
  SAVE_USER_SCREEN_ORDER_DATA,
  SHOW_SPINNER,
} from "../actions/user-context";

const UserReducer = (state, action) => {
  if (action.type === SHOW_SPINNER) {
    return { ...state, isOrderLoading: true };
  }
  if (action.type === HIDE_SPINNER) {
    return { ...state, isOrderLoading: false };
  }
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

  if (action.type === HANDLE_ORDER_DESCRIPTION) {
    return {
      ...state,
      newOrder: { ...state.newOrder, orderDescription: action.payload },
    };
  }
  if (action.type === HANDLE_CHECKBOX) {
    const { typeID, typeName } = action.payload;
    const itemAlreadyExists = state.newOrder.itemTypes.find((item) => {
      return item.id === typeID;
    });

    if (itemAlreadyExists) {
      const tempItemTypes = state.newOrder.itemTypes.filter((item) => {
        return item.id !== typeID;
      });
      return {
        ...state,
        newOrder: { ...state.newOrder, itemTypes: tempItemTypes },
      };
    } else {
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          itemTypes: [
            ...state.newOrder.itemTypes,
            { id: typeID, itemTypeName: typeName },
          ],
        },
      };
    }
  }
  return state;
};

export default UserReducer;
