import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useSelector,useDispatch } from 'react-redux'
import { incriment,decriment,reset} from "../redux/state/counter/counterSlice"

const Counter = () => {

    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch()
    return (
        <div className='row'>
            <div className='col-md-12 mt-5'>
                <Card>
                    <Card.Header>Redux Counter App</Card.Header>
                    <Card.Body>
                        <h1>{count}</h1>
                        <div >
                            <Button onClick={()=>{dispatch(incriment())}} variant="primary">Incriment</Button>
                            <Button onClick={()=>{dispatch(decriment())}} className='btn btn-danger m-3'>Decriment</Button>
                            <Button onClick={()=>{dispatch(reset())}} className='btn btn-danger m-3'>Reset</Button>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Counter