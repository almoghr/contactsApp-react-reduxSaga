import {takeEvery, call} from 'redux-saga/effects';
import * as actions from '../actions/users'
import * as api from '../api/users'

function* getUsers() {
    try{
        const result = yield call(api.getUsers);
        
    } catch(e){

    }
}
function *watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers)
}