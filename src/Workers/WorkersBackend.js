import React from 'react';

const workers = ( props ) => {
    return (
        <div>
            <img src={props.image} alt={props.name}></img>
            <div>
            <p>
                <b>{props.name}</b>
            </p>
            <p>#:
                <span>{props.count}</span>
            </p>
            <div>Cost:
                <span>{props.cost}</span>
            </div>
            <p>Description: </p>
            <button onClick={props.click}>Hire</button>
            </div>
        </div>
    )
};
                        
export default workers;
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        