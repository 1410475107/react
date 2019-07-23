import React, { Component } from 'react'
import url from 'url';
export default class BookInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            binfo:{},
            bid:0
        }

    }

    // componentDidMount(){
    //     console.log(this.props.match.params.bid);
    // }

    componentDidMount(){
        console.log(this.props.location.search);
        console.log(url.parse(this.props.location.search, true).query);
        let q = url.parse(this.props.location.search, true).query;
        this.setState({
            bid:q.bid
        });
        // axios  ajax  
    }

    render() {
        return (
            <div>
                书本详情  -- {this.state.bid}
      </div>
        )
    }
}
