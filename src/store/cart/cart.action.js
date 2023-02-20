import { createAction } from "../../utils/reducer/reducer.utils";
import {CART_ACTION_TYPES} from "./cart.types"


export const setShowDropdown = (bool) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS,bool)

export const setCartItems = (cartItems) => createAction(CART_ACTION_TYPES.SET_CART_ITEMS,cartItems)