let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'SIGN_IN':
        return {
        loggingIn: true,
        user: action.user
        };
    case 'SIGN_IN_SUCCESS':
        return {
        loggedIn: true,
        user: action.user
        };
    case 'SIGN_IN_ERROR':
        return {};
    case 'SIGN_OUT':
        return {};
    default:
        return state
    }
}

export const getAllReducer = (state = {}, action) => {
    switch (action.type) {
    case 'GETALL':
        return {
        loading: true
        };
    case 'GETALL_SUCCESS':
        return {
        items: action.users
        };
    case 'GETALL_ERROR':
        return { 
        error: action.error
        };
    default:
        return state
    }
}