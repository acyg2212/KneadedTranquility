import React, { useEffect, useState } from 'react';
import Calendar from "./Calendar"

const Employee = ({ props }) => {
    let [employees, setEmployee] = useState([]);
    let [selectedEmployeeOption, setSelectedEmployeeOption] = useState('');
    console.log(props)

    const handleChange = event => {
        setSelectedEmployeeOption(event.target.value)
    }

    useEffect(() => {
        const loadServiceTypes = async () => {
            const response = await fetch(`/api/appointments/employee/${props.serviceTypeId}`)
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

        <div className="employee-div">
            <select value={selectedEmployeeOption} onChange={handleChange} id="services">
                <option value="">--Please choose a Spa Associate--</option>
                {employees.employees.map(employee => {
                    return (
                        <option key={employee.id} value={employee.id}>{employee.firstName}</option>
                    )
                })
                }
            </select>
            <div>
                {selectedEmployeeOption ? <Calendar props={{ props, employeeId: selectedEmployeeOption }} /> : ""}
            </div>
        </div>

    )
}

export default Employee;