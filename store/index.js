import { createStore } from 'redux';
import reducers from "./reducers";
// 创建一个管理员
const store = createStore(reducers);

export default store;
