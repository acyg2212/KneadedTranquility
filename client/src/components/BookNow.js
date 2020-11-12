import React, { useEffect, useState } from 'react';
import Service from './Service';



const BookNow = () => {
    let [serviceTypes, setServiceTypes] = useState([]);
    let [selectedOption, setSelectedOption] = useState('');

    const handleChange = event => {
        setSelectedOption(event.target.value)
    }


    useEffect(() => {
        const loadServiceTypes = async () => {
            const response = await fetch('/api/appointments/')
            if (response.ok) {
                let service = await response.json()
                let { serviceTypes } = service
                setServiceTypes({ serviceTypes })
            }
        }
        loadServiceTypes()
    }, [])

    if (serviceTypes.length === 0) {
        return null;
    }

    return (
        <div className="book-now-div">

            <select value={selectedOption} onChange={handleChange} id="serviceTypes">
                <option value="">--Please choose a Service Type--</option>
                {serviceTypes.serviceTypes.map(serviceType => {
                    return (
                        <option key={serviceType.id} value={serviceType.id}>{serviceType.serviceCategory}</option>
                    )
                })
                }
            </select>
            <div>
                {selectedOption ? <Service props={selectedOption} /> : ""}
            </div>
        </div>
    )
}



export default BookNow;
