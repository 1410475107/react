import React, { Component } from 'react';
import Showstu from './components/student/Showstu';
import AddStu from './components/student/AddStu';
class App extends Component {
    constructor(props) {
        super(props);
        // 放数据的地方
        this.state = {
            stulist:[]
        }
        this.delStu = this.delStu.bind(this);
        this.addStu = this.addStu.bind(this);
    }

    addStu(username){
        // let stulist = this.state.stulist;
        // stulist.push(username);
        this.setState({
            // stulist:stulist
            stulist:[...this.state.stulist, username]
        });
    }

    // 删除学生
    delStu(ind){
        let stulist = this.state.stulist;
        stulist.splice(ind, 1);
        this.setState({
            stulist:stulist
        });
    }

    stuList(){
        return  this.state.stulist.map((item, ind)=>{
            return <Showstu key={ind} stuinfo={item} operName={this.delStu} ind={ind} />;
        })
    }
    
    render() {
        return (
            <div>
               <h3>学生管理系统</h3>
                    <AddStu opername={this.addStu} />
                   <hr />
                   <ul> { this.stuList() } </ul>
            </div>
        );
    }
}

export default App;
