import React, { useEffect, useState } from 'react';
import Service from './Service';


const BookNow = () => {
    let [serviceTypes, setServiceTypes] = useState([]);
    let [selectedOption, setSelectedOption] = useState('');

    const handleChange = event => {
        // event.preventDefault()
        setSelectedOption(event.target.value)
    }

    // let renderSelectedForm = (selectedOption) => {
    //     switch (selectedOption.value) {
    //         case "1":
    //             return <Massage />

    //         case "2":
    //             return <div>Option 2</div>

    //         case "3":
    //             return <div>Option 3</div>
    //         default:
    //             return null;
    //     }
    // }

    useEffect(() => {
        const loadServiceTypes = async () => {
            const response = await fetch('http://localhost:3000/api/appointments/')
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

// const mapStateToProps = state => {
//     return null
// }
// const mapStateToProps = state => {
//     return {
//         serviceTypes: state.appointmentBooking.serviceTypes,
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         tryServiceType: dispatch(thunks.tryServiceType())
//     }
// }

export default BookNow;
// export default connect(mapStateToProps, mapDispatchToProps)(BookNow);