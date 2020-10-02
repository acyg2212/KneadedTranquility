import React from 'react';
import FacialPic from '../assets/facial.jpg'
import MassagePic from '../assets/massage.jpg'
import EssentialOil from "../assets/essential-oils.jpg"
import lotus from "../assets/lotus.png"

const Home = () => {


    return (
        <div className="home-container">
            <div className="home-container__picture-container">
                <img className="picture-container__img" src={MassagePic} alt="Lady getting a massage." />
                <img className="picture-container__img" src={EssentialOil} alt="Essential oil vial." />
                <img className="picture-container__img" src={FacialPic} alt="Girl with masque on her face." />
            </div>
            <h1>A Natural Approach To Better Health</h1>
            <h3>Keep Your Mind And Body In Balance </h3>
            <div className="card-container">
                <div className="cards">
                    <h4>Massage</h4>
                    <p>Our licensed massage therapists will create customized massage session, to help in easing muscle pain.
                    It does not matter if you are an athlete or weekend warrior, we have
                    something for you.
                    </p>
                </div>
                <div className="cards">
                    <h4>Nails</h4>
                    <p>Our licensed nail technicians will make sure that your nails are perfect
                    in every way. Over 100 nail polish colors to choose from, you will not find
                    a better selection.
                    </p>
                </div>
                <div className="cards">
                    <h4>Skincare</h4>
                    <p>Reinvigorate your natural radiance with our natural skin care products. Choose from
                    a number of services that are designed specifically for your skin type.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;