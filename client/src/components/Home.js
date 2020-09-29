import React from 'react';
import FacialPic from '../assets/facial.jpg'
import MassagePic from '../assets/massage.jpg'
import EssentialOil from "../assets/essential-oils.jpg"

const Home = () => {


    return (
        <div className="home-container">
            <div className="home-container__picture-container">
                <img className="picture-container__img" src={MassagePic} alt="Lady getting a massage." />
                <img className="picture-container__img" src={EssentialOil} alt="Essential oil vial." />
                <img className="picture-container__img" src={FacialPic} alt="Girl with masque on her face." />
            </div>
            <h1>A Natural Approach To Better Health</h1>
        </div>
    )
}

export default Home;