import {DEL_STUDENT, ADD_STUDENT} from './actionTypes';
let storeData = {
    username: '胡友作',
    stulist: ['杨廷利', '杜奕君']
}

export default (state = storeData, action) => {
    console.log(state, action);
    // 你不能直接修改redux里面的数据
    let newStoreData = {};
    switch (action.type) {
        case ADD_STUDENT:
            newStoreData = JSON.parse(JSON.stringify(state));
            newStoreData.stulist.push(action.value);
            return newStoreData;
            break;
        case DEL_STUDENT:
            newStoreData = JSON.parse(JSON.stringify(state));
            newStoreData.stulist.splice(action.value, 1);
            return newStoreData;
            break;
        default:
            break;
    }

    return state;
}