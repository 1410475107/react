import React, { Component } from 'react';
import StuInfo from './components/life/StuInfo';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            stulist:['贺子航', '李梦玉']
        }
        this.delStu = this.delStu.bind(this);
    }

    componentWillMount(){
        console.log('will mount');
    }

    componentDidMount(){
        console.log('did mount');
    }

    delStu(){
        let stulist = this.state.stulist;
        stulist.splice(0, 1);
        this.setState({
            stulist:stulist
        });
    }
    
    render() {
        console.log('render');
        return (
            <div>
               {
                   this.state.stulist.map((item, ind)=>{
                       return <StuInfo key={ind} stu={item} deloper={this.delStu} />
                   })
               }
            </div>
        );
    }
}

export default App;
