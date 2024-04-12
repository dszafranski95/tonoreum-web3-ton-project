import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/images/background-2.jpg';
import Loader from '../Loader/Loader'; // Make sure the path to your loader component is correct

export const Hero = () => {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        const image = new Image();
        image.src = backgroundImage;
        image.onload = () => setIsImageLoaded(true);
    }, []);

    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            {!isImageLoaded && <Loader />}  {/* Show loader while image is loading */}
            <div className={`hero-overlay bg-opacity-60 ${isImageLoaded ? 'block' : 'hidden'}`}></div>
            <div className={`hero-content text-center text-white ${isImageLoaded ? 'block' : 'hidden'}`}>
                <div className="max-w-md">
                    <h1 className="mb-5 text-2xl font-bold">
                        <span className="mb-5 text-7xl font-bold">Tonoreum</span><br />The First PoW/PoL on TON
                    </h1>
                    <p className="mb-5">
                        Tonoreum is the first Proof of Work / Proof of Link jetton on The Open Network. Tonoreum ($TOR) is the jetton for people who want to mine jettons.
                    </p>
                    <Link to="/start" className="btn btn-primary">
                        Get Started
                    </Link>
                </div>
            </div>
        </div>
    );
};
