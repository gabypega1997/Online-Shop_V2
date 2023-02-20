import { CATEGORIES_ACTION_TYPES } from "./category.types";

export const CATEGORIES_INITIAL_STATE = {
    categoriesMap: {},
};

export const categoriesReducer = (
    state = CATEGORIES_INITIAL_STATE,
    action = {}
) => {
    const { type, payload } = action;
    console.log(type);
    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
            console.log(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP);
            return { ...state, categoriesMap: payload };
        default:
            return state;
    }
};
