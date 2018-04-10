import React, { Component } from 'react';
import styles from './Workers.css';
import ResourceAnim from '../ResourceAnim/ResourceAnim';
import WorkerHire from './WorkerHire';
import WorkerProd from "./WorkerProd";

class WorkersBackend extends Component{
    
    constructor(props) {
        super(props);
        this.updateProd = this.updateProd.bind();
    }
    

    state = {
        key: 0,

        readyResource: {
            wood: 0,
            arrow: 0,
            bow : 0,
        }
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
                        <WorkerProd {...this.props} key={this.state.key} addReadyResource={this.addReadyResource}/>  
                        <h4>Wood: </h4><p>{this.props.resources.wood}</p>                      
                        <button onClick={() => this.updateProd()}>Collect Resource!</button>           
                    </div>       
                </div>
            </div>
        )
    };
};
                        
export default WorkersBackend;
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
