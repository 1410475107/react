import React, { Component } from 'react'
import HeaderMenu from '../../components/HeaderMenu/HeaderMenu';
import Axios from '../../model/Axios';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '贺子航',
            age: 20
        };

        this.changeName = this.changeName.bind(this);
    }

    componentDidMount(){
        Axios.get('/getuser')  //Promise
        .then(res => {
            console.log(res)
            this.setState(res.data);
        })
        .catch(err => {
            console.error(err); 
        })
    }

    changeName() {
        this.setState({
            username: '杜老板'
        });
    }

    render() {

        return (
            <div>
                <HeaderMenu noww="当前位置是首页" />
                首页
                <div onClick={this.changeName}>{this.state.username}</div>
                <ul className="ul">
                    <li>菜单</li>
                    <li>菜单</li>
                    <li>菜单</li>
                </ul>
            </div>
        )
    }
}
