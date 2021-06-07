import React, {useContext} from 'react'
import {Table } from 'reactstrap';
import './Details.css'
import {ThemeContext} from '../Pages/ShowPersonal'
import Button from './Buttons'
function Details() {
    const { personalInfoVisibility, emptyInfo} = useContext(ThemeContext);
    return (
        <div  style={{visibility:personalInfoVisibility}} className="Details">
            <div className="FotoAndTable">
                <div className="TableDiv"> 
                    <Table>
                        <thead>
                            <tr>
                            <th scope="row"></th>
                            <th>Detailed Information</th>
                            <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <th>Fist Name</th>
                            <td>{emptyInfo.name}
                        </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <th scope="row">2</th>
                            <th>Last Name</th>
                            <td>{emptyInfo.surname}</td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                            <th scope="row">3</th>
                            <th>Job Title</th>
                            <td>{emptyInfo.job}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
                <div className="Foto">
                    <img src={emptyInfo.foto} alt="" />
                </div>
            </div>
            <Button/>
        </div>
    )
}
export default Details