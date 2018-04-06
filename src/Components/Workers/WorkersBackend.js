import React from 'react';
import styles from './Workers.css';

const workers = ( props ) => {
    return (

        <div className="row">

            <div className="column left">
                <img src={props.image}/>
                <h3>{props.name}</h3>
            </div>

            <div className="column right">
             
                <div className="row">
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

                    <div className="column right workerRight">
                        <h3>testies</h3>

                        {/*Rows of resource image with black to colour fill on
                            each representing amount collected until maxed*/}

                        <img src={props.resourceImg} height="48epx" />
                        <img src={props.resourceImg} height="48epx" />
                        <img src={props.resourceImg} height="48epx" />
                        <img src={props.resourceImg} height="48epx" />
                        <img src={props.resourceImg} height="48epx" /> 
                        <img src={props.resourceImg} height="48epx" />
                        <img src={props.resourceImg} height="48epx" />
                        <img src={props.resourceImg} height="48epx" />
                        <img src={props.resourceImg} height="48epx" />
                        <img src={props.resourceImg} height="48epx" />
                        

                    </div>
                </div>       
            </div>

        </div>




    )
};
                        
export default workers;
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
                        
