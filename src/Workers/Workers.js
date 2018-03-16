import React, { Component } from 'react';
import Resources from '../Resources/Resources';
import WorkersBackend from './WorkersBackend';



class Workers extends Component{
    
    constructor(props) {
        super(props);
        this.state={
            workers:[
                {name:"Goblins",count:0,cost:20},
                {name:"Faerie",count:0,cost:200},
                {name:"Elf",count:0,cost:1500},
            ]
        };
    };
    
   



    //1. Get array
    //2. Set index to required value
    //3. Push full array to state

    hireBtnClickHandler = (id) => {

        var array=[...this.state.workers];
        array[id].count = array[id].count + 1;

        console.log(array[id]);
        this.setState(
            {
              workers: [array[0],array[1],array[2]]
            }
        )
    }


    render () {
        return(
            <div>
                <WorkersBackend
                    click={this.hireBtnClickHandler.bind(this,0)}
                    name={this.state.workers[0].name}
                    cost={this.state.workers[0].cost}
                    count={this.state.workers[0].count}/>

                <WorkersBackend
                    click={this.hireBtnClickHandler.bind(this,1)}
                    name={ this.state.workers[1].name}
                    cost={ this.state.workers[1].cost}
                    count={this.state.workers[1].count}/>

                <WorkersBackend
                    click={this.hireBtnClickHandler.bind(this,2)}
                    name={this.state.workers[2].name}
                    cost={this.state.workers[2].cost}
                    count={ this.state.workers[2].count}/>
            </div>
        );
    };
};


export default Workers;