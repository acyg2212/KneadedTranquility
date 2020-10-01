import React, { useEffect, useState } from 'react';

const Service = ({ props }) => {
    let [services, setServices] = useState([]);
    let [selectedServiceOption, setSelectedServiceOption] = useState('');
    console.log(props)

    const handleChange = event => {
        setSelectedServiceOption(event.target.value)
    }

    useEffect(() => {
        const loadServiceTypes = async () => {
            const response = await fetch(`http://localhost:3000/api/appointments/${props}`)
            if (response.ok) {
                let served = await response.json()
                let { services } = served
                setServices({ services })
            }
        }
        loadServiceTypes()
    }, [props])

    if (services.length === 0) {
        return null;
    }

    return (

        <div className="services-div">
            <select value={selectedServiceOption} onChange={handleChange} id="services">
                <option value="">--Please choose a Service--</option>
                {services.services.map(service => {
                    return (
                        <option key={service.id} value={service.id}>{service.serviceName}</option>
                    )
                })
                }
            </select>
        </div>

    )
}

export default Service;