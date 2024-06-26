import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from 'react-router-dom';
const EmploeeList = () => {


    const navigate = useNavigate();

    const deleteEmp = () => {
        alert("employee deleted")
    }

    const updateEmp = () => {
        navigate("/updateEmp")
    }

    const employeeInfo = () => {
        navigate("/employeeInfo")
    }

    const employees = [
        { id: 124, name: "charan", salary: 48393 },
        { id: 125, name: "madhan", salary: 34645 },
        { id: 126, name: "teja", salary: 8000 },
        { id: 126, name: "teja", salary: 21000 },
        { id: 127, name: "harsha", salary: 50000 },
        { id: 128, name: "chinna", salary: 60000 }
    ]

    useEffect(()=>{

    })
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-info flex">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <button class='btn btn-primary'><Link class="nav-link" to="/home" >Home</Link></button>
                    </li>
                    <li class="nav-item" >
                        <button class='btn btn-primary'><Link class="nav-link" to="/addEmp" >AddEmployee</Link></button>
                    </li>
                </ul>
            </nav>
            <Outlet />
            <div>
                <table class="table table-sm text-center" border="2px">
                    <thead >
                        <th class='py-3'>Id</th>
                        <th class='py-3'>Employee Name</th>
                        <th class='py-3'>Employee Salary</th>
                        <th class='py-3'>Actions</th>
                    </thead>
                    <tbody>
                        {employees.map(employee => (


                            <tr key={employee.id}>

                                <td>{employee.id}</td>
                                <td>{employee.name}</td>
                                <td>{employee.salary}</td>
                                <td>
                                    <button className="btn btn-danger mx-2" onClick={deleteEmp}>Delete</button>
                                    <button className="btn btn-success mx-3" onClick={updateEmp}>Update</button>
                                    <button className="btn btn-info mx-3" onClick={employeeInfo}>Info</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default EmploeeList