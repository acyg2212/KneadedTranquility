import React, { useEffect, useState } from 'react';

const Employee = ({ props }) => {
    let [employees, setEmployee] = useState([]);
    let [selectedEmployeeOption, setSelectedEmployeeOption] = useState('');
    console.log(props)

    const handleChange = event => {
        setSelectedEmployeeOption(event.target.value)
    }

    useEffect(() => {
        const loadServiceTypes = async () => {
            const response = await fetch(`http://localhost:3000/api/appointments/employee/${props}`)
            if (response.ok) {
                let employed = await response.json()
                let { employees } = employed
                setEmployee({ employees })
            }
        }
        loadServiceTypes()
    }, [props])

    if (employees.length === 0) {
        return null;
    }

    return (

        <div className="services-div">
            <select value={selectedEmployeeOption} onChange={handleChange} id="services">
                <option value="">--Please choose a Spa Associate--</option>
                {employees.employees.map(employee => {
                    return (
                        <option key={employee.id} value={employee.id}>{employee.firstName}</option>
                    )
                })
                }
            </select>
        </div>

    )
}

export default Employee;