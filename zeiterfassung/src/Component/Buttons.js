import React from 'react'
import {Button} from 'reactstrap'
import './Details.css';

function Buttons() {
    return (
        <div >
             <div className="Buttons">
                <Button className="ButtonCenter" color="primary" size="lg">Start Work</Button>
                <Button className="ButtonCenter1"  color="danger" size="lg">Finish Work</Button>
            </div>
        </div>
    )
}
export default Buttons