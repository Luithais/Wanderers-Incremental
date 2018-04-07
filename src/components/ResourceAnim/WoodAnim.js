import React, { Component } from 'react';
import styles from './ResourceAnim.css';
import { Keyframes, Frame } from 'react-keyframes';

import wood0 from '../../img/WoodAnim/wood0.png';
import wood10 from '../../img/WoodAnim/wood10.png';
import wood20 from '../../img/WoodAnim/wood20.png';
import wood30 from '../../img/WoodAnim/wood30.png';
import wood40 from '../../img/WoodAnim/wood40.png';
import wood50 from '../../img/WoodAnim/wood50.png';
import wood60 from '../../img/WoodAnim/wood60.png';
import wood70 from '../../img/WoodAnim/wood70.png';
import wood80 from '../../img/WoodAnim/wood80.png';
import wood90 from '../../img/WoodAnim/wood90.png';
import wood100 from '../../img/WoodAnim/wood100.png';


const IsZero = () => {
    <div />
}

const IsNotZero = (props) => {
    <div>
        <Keyframes className="resourceProgress" delay={props.delay}>
            <Frame duration={props.animSpeed}><img src={wood10} height="38px"/></Frame>
            <Frame duration={props.animSpeed}><img src={wood20} height="38px"/></Frame>
            <Frame duration={props.animSpeed}><img src={wood30} height="38px"/></Frame>
            <Frame duration={props.animSpeed}><img src={wood40} height="38px"/></Frame>
            <Frame duration={props.animSpeed}><img src={wood50} height="38px"/></Frame>
            <Frame duration={props.animSpeed}><img src={wood60} height="38px"/></Frame>
            <Frame duration={props.animSpeed}><img src={wood70} height="38px"/></Frame>
            <Frame duration={props.animSpeed}><img src={wood80} height="38px"/></Frame>
            <Frame duration={props.animSpeed}><img src={wood90} height="38px"/></Frame>
            <Frame duration={props.animSpeed}><img src={wood100} height="38px"/></Frame>
        </Keyframes>  
        <img src={wood0} className="emptyResource" height="38px"/>   
        {console.log(props.animSpeed)} 
    </div>
};

var result;
if (WoodAnim.props.animSpeed == 0){
    result = <IsZero />
}
else {
    result = <IsNotZero />
};

//All of above has to happen in below class; or IsZero and IsNotZero needs to have WoodAnim's props passed down

class WoodAnim extends Component {
    
    render () {
        return ({result});
    };

};
    
;


export default WoodAnim;

export {
    wood0,
    wood10,
    wood20,
    wood30,
    wood40,
    wood50,
    wood60,
    wood70,
    wood80,
    wood90,
    wood100,
};