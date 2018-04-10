import React, { Component } from 'react';
import styles from './ResourceAnim.css';
import { Keyframes, Frame } from 'react-keyframes';
import Workers from '../Workers/Workers';

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

import arrow0 from '../../img/WoodAnim/wood0.png';
import arrow10 from '../../img/WoodAnim/wood10.png';
import arrow20 from '../../img/WoodAnim/wood20.png';
import arrow30 from '../../img/WoodAnim/wood30.png';
import arrow40 from '../../img/WoodAnim/wood40.png';
import arrow50 from '../../img/WoodAnim/wood50.png';
import arrow60 from '../../img/WoodAnim/wood60.png';
import arrow70 from '../../img/WoodAnim/wood70.png';
import arrow80 from '../../img/WoodAnim/wood80.png';
import arrow90 from '../../img/WoodAnim/wood90.png';
import arrow100 from '../../img/WoodAnim/wood100.png';

import bow0 from '../../img/WoodAnim/wood0.png';
import bow10 from '../../img/WoodAnim/wood10.png';
import bow20 from '../../img/WoodAnim/wood20.png';
import bow30 from '../../img/WoodAnim/wood30.png';
import bow40 from '../../img/WoodAnim/wood40.png';
import bow50 from '../../img/WoodAnim/wood50.png';
import bow60 from '../../img/WoodAnim/wood60.png';
import bow70 from '../../img/WoodAnim/wood70.png';
import bow80 from '../../img/WoodAnim/wood80.png';
import bow90 from '../../img/WoodAnim/wood90.png';
import bow100 from '../../img/WoodAnim/wood100.png';


function imageSelector(resourceName) {

    switch (resourceName) {
        case 'wood':
            return (
                [wood0,wood10,wood20,wood30,wood40,
                wood50,wood60,wood70,wood80,wood90,wood100]
            );
            break;
        
        case 'arrow':
            return (
                [arrow0,arrow10,arrow20,arrow30,arrow40,
                arrow50,arrow60,arrow70,arrow80,arrow90,arrow100]
            );
            break;

        case 'bow':
            return (
                [bow0,bow10,bow20,bow30,bow40,
                bow50,bow60,bow70,bow80,bow90,bow100]
            );
            break;

        default:
            break;
    }




}

const IsZero = (props) => {

    const resource = imageSelector(props.resourceName)

    return(
        <img src={resource[0]} className="emptyResource" height="38px"/>   
    );
};

const IsNotZero = (props) => {

    const resource = imageSelector(props.resourceName)

    return (
        <div>
            <Keyframes className="resourceProgress" delay={props.delay} onEnd={props.addReadyResource}>
                <Frame duration={props.animSpeed}><img src={resource[1]} height="38px"/></Frame>
                <Frame duration={props.animSpeed}><img src={resource[2]} height="38px"/></Frame>
                <Frame duration={props.animSpeed}><img src={resource[3]} height="38px"/></Frame>
                <Frame duration={props.animSpeed}><img src={resource[4]} height="38px"/></Frame>
                <Frame duration={props.animSpeed}><img src={resource[5]} height="38px"/></Frame>
                <Frame duration={props.animSpeed}><img src={resource[6]} height="38px"/></Frame>
                <Frame duration={props.animSpeed}><img src={resource[7]} height="38px"/></Frame>
                <Frame duration={props.animSpeed}><img src={resource[8]} height="38px"/></Frame>
                <Frame duration={props.animSpeed}><img src={resource[9]} height="38px"/></Frame>
                <Frame duration={props.animSpeed}><img src={resource[10]} height="38px"/></Frame>
            </Keyframes>  
            <img src={resource[0]} className="emptyResource" height="38px"/>   
        </div>
    ) 
};

export {
    IsZero,
    IsNotZero
}