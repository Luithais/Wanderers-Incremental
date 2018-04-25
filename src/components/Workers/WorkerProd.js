import React, { Component } from 'react';
import styles from './Workers.css';
import ResourceAnim from '../ResourceAnim/ResourceAnim';

class WorkerProd extends Component{

    constructor(props) {
        super(props);
        const maxStamWait = true;
    }

    maxStaminaCheck(){
        switch (this.props.resourceName) {
            case 'wood':
                return (this.props.maxStamina.wood === this.props.readyResource.wood ? false : true)
                break;
        
            default:
                break;
        }
    }
      
    render () {
        const maxStamWait = this.maxStaminaCheck();
        return (
            <div className="column right workerRight">
                <h3>Production</h3>
                <button onClick={this.props.stamUpgrade} disabled={( maxStamWait )}>Increase Max Stamina</button>
                <table align="left">
                    <tbody>
                        <tr>
                            <td>
                                <div>
                                    <ResourceAnim 
                                        addReadyResource={this.props.addReadyResource} 
                                        delay={0}
                                        animSpeed={(1000/(this.props.prod * this.props.count))/10} count={this.props.count}
                                        resourceName={this.props.resourceName}/>
                                </div>                               
                            </td>
                            <td>
                                <div>
                                    <ResourceAnim 
                                        addReadyResource={this.props.addReadyResource} 
                                        delay={((1000/(this.props.prod * this.props.count))/10) * 10} count={this.props.count}
                                        animSpeed={(1000/(this.props.prod * this.props.count))/10} count={this.props.count}
                                        resourceName={this.props.resourceName}/>                
                                </div>                               
                            </td>
                            <td>
                                <div>
                                    <ResourceAnim 
                                        addReadyResource={this.props.addReadyResource} 
                                        delay={((1000/(this.props.prod * this.props.count))/10) * 20}
                                        animSpeed={(1000/(this.props.prod * this.props.count))/10} count={this.props.count}
                                        resourceName={this.props.resourceName}/>                             
                                </div>                               
                            </td>
                            <td>
                                <div>
                                    <ResourceAnim 
                                        addReadyResource={this.props.addReadyResource} 
                                        delay={((1000/(this.props.prod * this.props.count))/10) * 30}
                                        animSpeed={(1000/(this.props.prod * this.props.count))/10} count={this.props.count}
                                        resourceName={this.props.resourceName}/>                            
                                </div>                               
                            </td>
                            <td>
                                <div>
                                    <ResourceAnim 
                                        addReadyResource={this.props.addReadyResource} 
                                        delay={((1000/(this.props.prod * this.props.count))/10) * 40}
                                        animSpeed={(1000/(this.props.prod * this.props.count))/10} count={this.props.count}
                                        resourceName={this.props.resourceName}/>                             
                                </div>                               
                            </td>
                        </tr>
                        {this.props.renderList}
                    </tbody>
                </table> 
            </div>
        );
    };
};

export default WorkerProd