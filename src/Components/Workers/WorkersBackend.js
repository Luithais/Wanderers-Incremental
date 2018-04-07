import React, { Component } from 'react';
import styles from './Workers.css';
import { Keyframes, Frame } from 'react-keyframes';
import { wood0, wood10, wood20,
        wood30, wood40, wood50,
        wood60, wood70, wood80,
        wood90, wood100 } from '../ResourceAnim/WoodAnim';
import WoodAnim from '../ResourceAnim/WoodAnim';

class WorkersBackend extends Component{

    constructor(props) {
        super(props);        
    }


    state = {
        resourceGatherSpeed: {
            wood:0,
            iron:0,
            emerald:0,
            magicSeeds:0,
            goldDust:0,
            fairyDust:0,
        }
      };

    animSpeedCalc (props) {
        if (props.count == 0) {
            //Doesn't have desired effect of stopping animation from playing,=
            this.setState({
                resourceGatherSpeed: {
                    wood: 5000000
                }
            });
        }
        else {
            this.setState({
                resourceGatherSpeed: {
                    wood: (1000/(props.prod * props.count))/10
                }
            });
            console.log(this.state.resourceGatherSpeed.wood);
             
        };
    }
       
    componentDidMount() {
        this.animSpeedCalc(this.props);
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
                        <div className="column left">
                            <p>
                                <b>{this.props.name}</b>
                            </p>

                            <p>#:
                                <span>{this.props.count}</span>
                            </p>

                            <p>
                                Prod/E: {this.props.prod}
                            </p>

                            <p>Total Prod:
                                <span>{this.props.prod * this.props.count}</span>
                            </p>

                            <p>Cost:
                                <span>{this.props.cost}</span>
                            </p>

                            <p>Description: </p>
                            <button onClick={this.props.click}>Hire</button>
                        </div>  

                        <div className="column right workerRight">
                            <h3>testies</h3>
                            <table align="left">
                                <tbody>
                                    <tr>
                                        <td>
                                            <div>
                                                <WoodAnim delay={0} animSpeed={this.state.resourceGatherSpeed.wood}/>
                                            </div>                               
                                        </td>
                                        <td>
                                            <div>
                                                <WoodAnim delay={0} animSpeed={this.state.resourceGatherSpeed.wood}/>
                                            </div>                               
                                        </td>
                                        <td>
                                            <div>
                                                <WoodAnim delay={0} animSpeed={this.state.resourceGatherSpeed.wood}/>
                                            </div>                               
                                        </td>
                                        <td>
                                            <div>
                                                <WoodAnim delay={0} animSpeed={this.state.resourceGatherSpeed.wood}/>
                                            </div>                               
                                        </td>
                                        <td>
                                            <div>
                                                <WoodAnim delay={0} animSpeed={this.state.resourceGatherSpeed.wood}/>
                                            </div>                               
                                        </td>
                                    </tr>
                                </tbody>
                            </table>            
                        </div>
                    </div>       
                </div>
            </div>
        )
    };
};
                        
export default WorkersBackend;
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
