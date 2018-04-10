import React from 'react';
import { IsZero, IsNotZero } from "./ZeroCheck";


function ResourceAnim(props) {
    const count = props.count;
    if (count == 0) {
      return <IsZero resourceName={props.resourceName}/>;
    }
    return <IsNotZero addReadyResource={props.addReadyResource} animSpeed={props.animSpeed} delay={props.delay} resourceName={props.resourceName}/>;
  }

export default ResourceAnim;

