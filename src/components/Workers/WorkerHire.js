import React from 'react';
import styles from './Workers.css';

function WorkerHire(props) {
    return (
        <div className="column left">
            <p>
                <b>{props.name}</b>
            </p>

            <p>#:
                <span>{props.count}</span>
            </p>

            <p>
                Prod/E: {props.prod}
            </p>

            <p>Total Prod:
                <span>{props.prod * props.count}</span>
            </p>

            <p>Cost:
                <span>{props.cost}</span>
            </p>

            <p>Description: </p>
            <button onClick={props.click}>Hire</button>
    </div> 
    );
}

export default WorkerHire;