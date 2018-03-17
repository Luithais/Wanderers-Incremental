import React, { Component } from 'react';

class Resources extends Component {

    state = {
        resources: [
          {type:"gold",count:0},
          {type:"wood",count:0},
          {type:"arrow",count:0},
          {type:"bow",count:0},
        ]
      };

    //implement onChange listener (to listen
    //for gold change from hireBtnClickHandler
    //in Workers.js to avoid passing gold count
    //between Resources & Workers; maintains a
    //top-down unidirectional data flow )

    goldBtnClickHandler = (event) => {
        this.setState( {
            resources: [
            { type:"gold", count: this.state.resources[0].count +  1,}
            ]       
        });
    }

    render (){
        return (
            <div>
                {this.state.resources[0].count}
                <button onClick={this.goldBtnClickHandler}>Add Gold</button>
            </div>
        )
    }
}

export default Resources;