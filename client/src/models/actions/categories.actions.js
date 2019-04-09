import categories from '../../assets/data/categories';


// ------------------------- GET TRIP CATEGORIES -----------------------

// ACTION CREATORs
export const getCategories = () => ({ payload: categories, type: 'GET_CATEGORIES' });
