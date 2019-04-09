import { initialCategoriesState } from './categories.state';

export function categoriesReducer(state = initialCategoriesState, action) {
    switch (action.type) {
      case 'GET_CATEGORIES':
        return {
          ...state,
          list: action.payload
        };
        default:
        return state;
    };
};