import React from 'react'
import {useSelector, useDispatch} from 'react-redux'


export default function ReduxCounter () {

    const dispatch = useDispatch()
    const count = useSelector(state  => state.count)




    return (
        <div className="header">
            <h1 className="counter">
                counter
            </h1>
            <p className="counterCount">
                count:{count}
            </p>
            <button onClick={() => dispatch({type:'INCREMENT'})} className="buttons">
                INCREMENET
            </button>
            <button onClick={() => dispatch ({type: 'DECREMENT'})} className="buttons">
                DECREMENET
            </button>
        </div>




    )
}