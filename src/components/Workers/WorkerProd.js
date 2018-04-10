import React from 'react';
import styles from './Workers.css';
import ResourceAnim from '../ResourceAnim/ResourceAnim';

function WorkerProd(props) {
    return (
        <div className="column right workerRight">
            <h3>Production</h3>
            <table align="left">
                <tbody>
                    <tr>
                        <td>
                            <div>
                                <ResourceAnim 
                                    addReadyResource={props.addReadyResource} 
                                    delay={0}
                                    animSpeed={(1000/(props.prod * props.count))/10} count={props.count}
                                    resourceName={props.resourceName}/>
                            </div>                               
                        </td>
                        <td>
                            <div>
                                <ResourceAnim 
                                    addReadyResource={props.addReadyResource} 
                                    delay={((1000/(props.prod * props.count))/10) * 10} count={props.count}
                                    animSpeed={(1000/(props.prod * props.count))/10} count={props.count}
                                    resourceName={props.resourceName}/>                
                            </div>                               
                        </td>
                        <td>
                            <div>
                                <ResourceAnim 
                                    addReadyResource={props.addReadyResource} 
                                    delay={((1000/(props.prod * props.count))/10) * 20}
                                    animSpeed={(1000/(props.prod * props.count))/10} count={props.count}
                                    resourceName={props.resourceName}/>                             
                            </div>                               
                        </td>
                        <td>
                            <div>
                                <ResourceAnim 
                                    addReadyResource={props.addReadyResource} 
                                    delay={((1000/(props.prod * props.count))/10) * 30}
                                    animSpeed={(1000/(props.prod * props.count))/10} count={props.count}
                                    resourceName={props.resourceName}/>                            
                            </div>                               
                        </td>
                        <td>
                            <div>
                                <ResourceAnim 
                                    addReadyResource={props.addReadyResource} 
                                    delay={((1000/(props.prod * props.count))/10) * 40}
                                    animSpeed={(1000/(props.prod * props.count))/10} count={props.count}
                                    resourceName={props.resourceName}/>                             
                            </div>                               
                        </td>
                    </tr>
                </tbody>
            </table> 
        </div>
    );
}

export default WorkerProd;