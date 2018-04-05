import React, { Component } from 'react';
import Workers from '../components/Workers/Workers';
import Resources from './Resources';
import { Loop } from 'react-game-kit/lib';

class GameLoop extends Component {

    constructor(props) {
        super(props);
        this.LoopInterval = this.LoopInterval.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    
    LoopInterval(props){
        var x = this.props;
        console.log(props);



        setInterval(function (x) {
            props.addGold((props.goblins.prod) * (props.goblins.count));
            props.addGold((props.faeries.prod) * (props.faeries.count));
            props.addGold((props.elves.prod) * (props.elves.count));
        }, 1000)
    };


    componentDidMount(props) {             
        this.LoopInterval(this.props);
    }
    



  render() {

    
    return (
        <div />
    )
  }
}

export default GameLoop;
