import React, { Component } from 'react';
import Resources from '../../containers/Resources';
import WorkersBackend from './WorkersBackend';

class Workers extends Component{
    
    constructor(props) {
        super(props);
        console.log(props);
        this.state={
            workers:[
                {name:"Goblins", count:0, cost:20, id: 0},
                {name:"Faerie",count:0,cost:200,id:1},
                {name:"Elf",count:0,cost:1500,id:2},
            ]
        };
        this.hireBtnClickHandler = this.hireBtnClickHandler.bind(this);
    };

    hireBtnClickHandler = (id) => {

        const worker = this.state.workers.find(worker => worker.id === id); 
        if(this.props.updateGoldHandler(
                worker.cost
        ))
        {
            this.setState(
                {workers:[...this.state.workers, worker.count ++]}
            );
        };
    };

    render () {
        return(
            <div>
                <WorkersBackend
                    click={() => this.hireBtnClickHandler(0)}
                    name={this.state.workers[0].name}
                    cost={this.state.workers[0].cost}
                    count={this.state.workers[0].count}/>

                <WorkersBackend
                    click={() => this.hireBtnClickHandler(1)}
                    name={this.state.workers[1].name}
                    cost={this.state.workers[1].cost}
                    count={this.state.workers[1].count}/>

                <WorkersBackend
                    click={() => this.hireBtnClickHandler(2)}
                    name={this.state.workers[2].name}
                    cost={this.state.workers[2].cost}
                    count={this.state.workers[2].count}/>
            </div>
        );
    };
};


export default Workers;