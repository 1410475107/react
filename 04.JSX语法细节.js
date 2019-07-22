import React, { Component } from 'react';
class App extends Component {
    constructor(props) {
        super(props);
        // 放数据的地方
        this.state = {
           myhtml:'<p>段落信息</p>'
        }
    }


    render() {
        return (
            <div>
                {/* 如何注释 */}
                <div className="mydiv" dangerouslySetInnerHTML={{__html:this.state.myhtml}}>
                </div>
                性别：<input type="radio" id="gender" value="1" /> <label htmlFor="gender">男</label>
            </div>
        );
    }
}

export default App;
