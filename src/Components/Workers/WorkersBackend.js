import React, { Component } from 'react';
import styles from './Workers.css';
import ResourceAnim from '../ResourceAnim/ResourceAnim';
import WorkerHire from './WorkerHire';
import WorkerProd from "./WorkerProd";
import loop from 'react-game-kit/lib/components/loop';

class WorkersBackend extends Component{
    
    constructor(props) {
        super(props);
        this.updateProd = this.updateProd.bind();
        this.stamUpgrade = this.stamUpgrade.bind();
    }
    

    state = {
        key: 0,

        readyResource: {
            wood: 0,
            arrow: 0,
            bow : 0,
        },

        maxStamina: {
            wood: 5,
            arrow: 3,
            bow: 1,
        },

        renderList: []
    };

    updateProd = () => {
        const thisResource = this.props.resourceName;
        this.setState({key: Math.random()})

        switch (thisResource) {
            case 'wood':
                this.props.addProd(thisResource, this.state.readyResource.wood)
                this.setState({readyResource: {wood: 0}});
                console.log(this.props.resources);       
                break;
            
            case 'arrow':
                this.props.addProd(thisResource, this.state.readyResource.arrow)
                this.setState({readyResource: {arrow: 0}});
                break;  
    
            case 'bow':
                this.props.addProd(thisResource, this.state.readyResource.bow)
                this.setState({readyResource: {bow: 0}});
                break;
    
            default:
                break;
        }        
    };

    addReadyResource = (id) => {
        this.setState({wood: this.state.readyResource.wood ++});
    };

    addToList = (amount) => {
        for (let index = 0; index < amount; index++) {
            this.state.renderList.push(
            <td>
                <div>
                    <ResourceAnim 
                        addReadyResource={this.addReadyResource} 
                        delay={0}
                        animSpeed={(1000/(this.props.prod * this.props.count))/10} count={this.props.count}
                        resourceName={this.props.resourceName}/>
                </div>                               
            </td>

            )
        }
        this.setState({key: Math.random()})

    }

    stamUpgrade = () => {
        switch (this.props.resourceName) {
            case 'wood':
                this.addToList(this.state.maxStamina.wood);
                this.setState({maxStamina: {wood:this.state.maxStamina.wood * 2}});
                this.setState({readyResource: {wood: 0}});
                console.log(this.state.maxStamina.wood);
                console.log(this.state.renderList);
                
                break;
        
            default:
                break;
        }
    }

    render () {
        return (
            <div className="row">

                <div className="column left">
                    <img src={this.props.image}/>
                    <h3>{this.props.name}</h3>
                </div>

                <div className="column right">
                
                    <div className="row">
                        {this.state.readyResource.wood};
                        {this.state.readyResource.arrow};
                        {this.state.readyResource.bow};
                        <WorkerHire {...this.props}/>
                        <WorkerProd {...this.props} key={this.state.key} addReadyResource={this.addReadyResource} renderList={this.state.renderList}
                         readyResource={this.state.readyResource} maxStamina={this.state.maxStamina}
                         stamUpgrade={this.stamUpgrade}/>  
                        <h4>Wood: </h4><p>{this.props.resources.wood}</p>                      
                        <button onClick={() => this.updateProd()}>Collect Resource!</button>           
                    </div>       
                </div>
            </div>
        )
    };
};
                        
export default WorkersBackend;
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
