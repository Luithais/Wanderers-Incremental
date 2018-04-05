import React, { Component } from 'react';
import Workers from '../components/Workers/Workers';
import GameLoop from './GameLoop';


class Resources extends Component {

    state = {
        resources: {
            gold: 0,
            wood: 0,
            arrow: 0,
            bow: 0,
        },
      };

    addGoldHandler = (amount) => {
        this.setState({resources: {...this.state.resources, gold: this.state.resources.gold + amount}});
    };

    updateGoldHandler = (cost) => {
        if ((this.state.resources.gold - cost) >= 0) {
            this.setState({ resources: { ...this.state.resources, gold: (this.state.resources.gold - cost) } });
            return true;
        } else {
            console.log('Not enough gold!');
            return false;
        }
    };

    goldBtnClickHandler = (event) => {
        this.setState( {
            resources: { gold: this.state.resources.gold + 1 }     
        });
    };

    render (){
        return (
            <div>
                <Workers updateGoldHandler={this.updateGoldHandler} addGoldHandler={this.addGoldHandler}/>
                <div>{this.state.resources.gold}</div>
                <button onClick={this.goldBtnClickHandler}>Add Gold</button>
            </div>
        )
    };
}

export default Resources;