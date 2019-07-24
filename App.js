import React, { Component } from 'react';
import Showstu from './components/student/Showstu';
import AddStu from './components/student/AddStu';
// 使用redux管理我们的状态
import store from './store';
class App extends Component {
    constructor(props) {
        super(props);
        // 放数据的地方
        this.state = {
            stulist:store.getState().stulist
        }
        // 需要显示的去订阅redux里面的数据
        this.getStoreData = this.getStoreData.bind(this);
        store.subscribe(this.getStoreData);
    }

    getStoreData(){
        // this.state = store.getState();
        this.setState({
            stulist:store.getState().stulist
        });
    }

    stuList(){
        return  this.state.stulist.map((item, ind)=>{
            return <Showstu key={ind} stuinfo={item} ind={ind} />;
        })
    }
    
    render() {
        return (
            <div>
               <h3>学生管理系统</h3>
                    <AddStu />
                   <hr />
                   <ul> { this.stuList() } </ul>
            </div>
        );
    }
}

export default App;
