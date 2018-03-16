import React, { Component } from 'react';
import Resources from '../Resources/Resources';
import WorkersBackend from './WorkersBackend';

class Workers extends Component{
    
    constructor(props) {
        super(props);
        this.hireBtnClickHandler = this.hireBtnClickHandler.bind(this);
    };
    
   

    state={
        workers:[
            {name:"Goblins",count:0,cost:20},
            {name:"Faerie",count:0,cost:200},
            {name:"Elf",count:0,cost:1500},
        ]
    };

    hireBtnClickHandler = (id) => {

        this.setState.workers[id] = this.state.workers[id].count + 1;
        //newCost=0

        this.setState(
            {
              workers: [
                  {name:"Goblins",count:this.state.workers[id].count,cost:20},
                  {name:"Faerie",count:this.state.workers[id].count,cost:200},
                  {name:"Elf",count:this.state.workers[id].count,cost:1500},
              ]
            }
          )
      }


    render () {
        return(
            <div>
                <WorkersBackend click={() => this.hireBtnClickHandler(0)} name={this.state.workers[0].name} cost={this.state.workers[0].cost} count={this.state.workers[0].count}/>
                <WorkersBackend click={() => this.hireBtnClickHandler(1)} name={this.state.workers[1].name} cost={this.state.workers[1].cost} count={this.state.workers[1].count}/>
                <WorkersBackend click={() => this.hireBtnClickHandler(2)} name={this.state.workers[2].name} cost={this.state.workers[2].cost} count={this.state.workers[2].count}/>
            </div>
        );
    };
};


export default Workers;