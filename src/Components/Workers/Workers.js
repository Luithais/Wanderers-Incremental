import React, { Component } from 'react';
import Resources from '../../containers/Resources';
import WorkersBackend from './WorkersBackend';

class Workers extends Component{
    
    constructor(props) {
        super(props);
        console.log(props);
        this.state={
            workers:{
                Goblins: {count:0, cost:20, prod: 1, id: 0},
                Faerie: {count:0,cost:200, prod: 5, id:1},
                Elf: {count:0,cost:1500, prod: 10, id:2},
            }
        };
        this.hireBtnClickHandler = this.hireBtnClickHandler.bind(this);
    };

    hireBtnClickHandler = (id) => {
        
        const worker = Object.values(this.state.workers).find(worker => worker.id === id);
        const workerKey = Object.keys(this.state.workers).find(key => worker[key].id === id);

        //worker = {count:0, cost:20, prod:1, id: 0};

        if(this.props.updateGoldHandler(
            worker.cost
        ))
        {
            this.setState( {
                workers: {{workerKey}: this.state.workers.{workerKey}.count }     
            });
        };
    };

    render () {
        return(
            <div>
                <WorkersBackend
                    click={() => this.hireBtnClickHandler(0)}
                    name={"Goblins"}
                    cost={this.state.workers.Goblins.cost}
                    count={this.state.workers.Goblins.count}/>

                <WorkersBackend
                    click={() => this.hireBtnClickHandler(1)}
                    name={"Faeries"}
                    cost={this.state.workers.Faerie.cost}
                    count={this.state.workers.Faerie.count}/>

                <WorkersBackend
                    click={() => this.hireBtnClickHandler(2)}
                    name={"Elves"}
                    cost={this.state.workers.Elf.cost}
                    count={this.state.workers.Elf.count}/>
            </div>
        );
    };
};


export default Workers;