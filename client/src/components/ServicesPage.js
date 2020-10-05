import React from 'react';
import spa from "../assets/spa.jpg";
import manicure from "../assets/manicure.jpg";
import facial from "../assets/beauty.jpg"
import { Link } from "react-router-dom";




const ServicesPage = () => {


    return (
        <div className="services-page-container">
            <img className="services-img" src={spa} alt="Spa with towels." />
            <div className="services-page-div">
                <p className="services-page-title">Personalized Service</p>
                <p className="services-page-sub-title">A one-of-a-kind service each and every time.</p>
                <Link to="/login"><button className="services-page-booknow" > Book Now</button></Link>
            </div>
            <div className="service-list-container">
                <table className="massage-table">
                    <caption>
                        <th>Massages</th>
                    </caption>
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>Swedish Massage</td>
                        <td>$75</td>
                        <td>Swedish Massage uses smooth gliding  <br /> strokes to promote relaxation.</td>
                    </tr>
                    <tr>
                        <td>Deep Tissue Massage</td>
                        <td>$85</td>
                        <td>Deep tissue massage is a technique used <br />to relieve both muscles and connective <br /> tissue below the surface.</td>
                    </tr>
                    <tr>
                        <td>Sports Massage</td>
                        <td>$85</td>
                        <td>Sports massage uses a variety of massage <br /> techniques designed to help your body <br /> feel freer and stronger.</td>
                    </tr>
                </table>
                <img src={manicure} alt="nail polish" className="manicure-picture" />
                <table className="nails-table">
                    <caption>
                        <th>Nails</th>
                    </caption>
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>Manicure</td>
                        <td>$25</td>
                        <td>Nails are trimmed and shaped, cuticles are <br /> gently groomed, and a relaxing massage <br />completes the treatment before polishing.</td>
                    </tr>
                    <tr>
                        <td>Pedicure</td>
                        <td>$85</td>
                        <td>Soak your feet in the whirlpool pedi tub, <br /> followed by filling, shaping, trim and cut <br /> cuticles also included a relaxing massage.</td>
                    </tr>
                </table>
                <img src={facial} alt="beauty products" className="facial-picture" />
                <table className="facials-table">
                    <caption>
                        <th>Facials</th>
                    </caption>
                    <tr>
                        <th>Service</th>
                        <th>Price</th>
                        <th>Description</th>
                    </tr>
                    <tr>
                        <td>Vitamin C Facial </td>
                        <td>$85</td>
                        <td>From organic citrus and kale, this potent dose <br /> of non-irritating vitamin C brightens skin, lightens <br />dark spots, clarifies and evens complexion.</td>
                    </tr>
                    <tr>
                        <td>Age Correction Facial</td>
                        <td>$85</td>
                        <td>Designed to correct the signs of aging and rejuvenate the skin.</td>
                    </tr>
                </table>
            </div>
        </div >
    )
}

export default ServicesPage;