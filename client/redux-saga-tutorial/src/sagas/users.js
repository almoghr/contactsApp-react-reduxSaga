import {takeEvery, takeLatest, take, call, fork, put} from 'redux-saga/effects';
import * as actions from '../actions/users'
import * as api from '../api/users'

function* getUsers() {
    try{
        const result = yield call(api.getUsers);
        yield put(actions.getUsersSuccess({
            items:result.data.data
        }));
    } catch(e){

    }
}
function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}

function* createUser(action){
    try{
        yield call(api.createUser, {firstName: action.payload.firstName, lastName: action.payload.lastName});
        console.log('works')
            yield call(getUsers)
        console.log('works2')
    } catch (e){
        
    }
}
function* watchCreateUserRequest(){
    yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUser)
}
function* deleteUser({userId}){
    try{
        yield call(api.deleteUser, userId)
    } catch (e){
        
    }
}
function* watchDeleteUserRequest(){
    while(true) {
        const action = yield take(actions.Types.DELETE_USER_REQUEST);
        yield call(deleteUser, {userId: action.payload.userId});
        yield call(getUsers)
    }
}
const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest),
    fork(watchDeleteUserRequest),
];

export default usersSagas