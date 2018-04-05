import React, { Component } from 'react';
import Resources from '../../containers/Resources';
import WorkersBackend from './WorkersBackend';
import GameLoop from '../../containers/GameLoop';
import styles from './Workers.css';
import GoblinImg from '../../img/goblin.png';
import FaerieImg from '../../img/faerie.png';
import ElfImg from '../../img/elf.png';

class Workers extends Component{
    
    constructor(props) {
        super(props);
        console.log(props);
        this.state={
            workers:{
                Goblins: {count:0, cost:20, prod: 1, id: 0},
                Faeries: {count:0,cost:200, prod: 5, id:1},
                Elves: {count:0,cost:1500, prod: 10, id:2},
            }
        };
        this.hireBtnClickHandler = this.hireBtnClickHandler.bind(this);
    };

    hireBtnClickHandler = (id) => {
        
        const worker = Object.values(this.state.workers).find(worker => worker.id === id);
        const workerKey = Object.keys(this.state.workers)[id];

        if(this.props.updateGoldHandler(worker.cost))
        {
            //update count of worker
            worker.count ++;

            //update cost of worker
            worker.cost = Math.floor(worker.cost * Math.pow(1.1,worker.count)); 

            this.setState({ worker });

        };
    };

    render () {
        return(
            <div>
                <GameLoop 
                    goblins={this.state.workers.Goblins}
                    faeries={this.state.workers.Faeries}
                    elves={this.state.workers.Elves}
                    addGold={this.props.addGoldHandler} />

                    <div className="row">
                        <div className="column">
                            <WorkersBackend 
                                click={() => this.hireBtnClickHandler(0)}
                                image={GoblinImg}
                                name={"Goblins"}
                                cost={this.state.workers.Goblins.cost}
                                count={this.state.workers.Goblins.count}
                                prod={this.state.workers.Goblins.prod}/>
        
                            <WorkersBackend
                                click={() => this.hireBtnClickHandler(2)}
                                image={ElfImg}
                                name={"Elves"}
                                cost={this.state.workers.Elves.cost}
                                count={this.state.workers.Elves.count}
                                prod={this.state.workers.Elves.prod}/>
                        </div>
                        <div className="column">
                            <WorkersBackend
                                click={() => this.hireBtnClickHandler(1)}
                                image={FaerieImg}
                                name={"Faeries"}
                                cost={this.state.workers.Faeries.cost}
                                count={this.state.workers.Faeries.count}
                                prod={this.state.workers.Faeries.prod}/>
                        </div>
                    </div>
            </div>
        );
    };
};


export default Workers;