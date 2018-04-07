import React, { Component } from 'react';
import Resources from '../../containers/Resources';
import WorkersBackend from './WorkersBackend';
import GameLoop from '../../containers/GameLoop';
import styles from './Workers.css';
import GoblinImg from '../../img/goblin.png';
import FaerieImg from '../../img/faerie.png';
import ElfImg from '../../img/elf.png';
import woodImg from '../../img/wood.png'
import woodImgBg from '../../img/woodBg.png'
import arrowImg from '../../img/arrow.png'
import bowImg from '../../img/bow.png'


class Workers extends Component{
    
    constructor(props) {
        super(props);
        console.log(props);
        this.state={
            workers:{
                Goblins: {count:0, cost:20, prod: 0.5, id: 0},
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

                <WorkersBackend 
                    click={() => this.hireBtnClickHandler(0)}
                    image={GoblinImg}
                    resourceImg={woodImg}
                    resourceImgBg={woodImgBg}
                    name="Goblins"
                    cost={this.state.workers.Goblins.cost}
                    count={this.state.workers.Goblins.count}
                    prod={this.state.workers.Goblins.prod}/>


            </div>
        );
    };
};


export default Workers;