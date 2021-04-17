
const login = (state, payload) => {
    return {
        ...payload,
        logged: true
    }
}
const logout = (state, payload) => { return {logged: false} }

const actionDicts = {
    '@auth/login': login,
    '@auth/logout': logout
}

export const authReducer = (state = {}, action) => {
    const selection = actionDicts[action.type];
    return selection ? selection(state, action.payload) : state;
}