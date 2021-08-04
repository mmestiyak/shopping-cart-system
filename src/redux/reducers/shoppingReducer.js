import actionTypes from '../actions/shoppingActionTypes';

const initialState = {
  products: [],
  cart: [],
  currentItem: null,
};

const shoppingReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM:
      // getting item
      const item = state.products.find(
        (product) => product.id === action.payload.itemId
      );
      //checking if item already in cart
      const inCart = state.cart.find((cartItem) => cartItem.id === item.id)
        ? true
        : false;
      // adding item depending on if item already in cart or not
      return {
        ...state,
        cart: inCart
          ? state.cart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
            )
          : [...state.cart, { ...item, quantity: 1 }],
      };
    case actionTypes.REMOVE_iTEM:
      // removing item from cart
      return {
        ...state,
        cart:
          state.cart.length === 1
            ? []
            : state.cart.filter(
                (cartItem) => cartItem.id === action.payload.itemId
              ),
      };
    case actionTypes.ADDJUST_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.itemId
            ? { ...item, quantity: Number(action.payload.adjustedQuantity) }
            : item
        ),
      };
    case actionTypes.SET_PRODUCTS:
      return {
        ...state,
        products: [...state.products, ...action.payload.products],
      };
    default:
      return state;
  }
};

export default shoppingReducer;
