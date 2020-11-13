export const Types = {
    GET_USERS_REQUEST: 'GET_USERS_REQUEST',
    GET_USERS_SUCCESS: 'GET_USERS_SUCCESS',
}

export const GetUsersRequest = () => ({
    type: Types.GET_USERS_REQUESTGET_USERS_REQUEST
});
export const GetUsersSuccess = ({items}) => ({
    type: Types.GET_USERS_SUCCESS,
    payload: {
        items
    }
});