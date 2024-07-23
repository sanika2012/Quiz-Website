import React from 'react';
import './FrontPage.css';
import photo from '../element/hackathon.png';

const FrontPage = () => {
    return (
        <div className="front-page">
            {/* <h1>Welcome to Hacktho Fest!</h1> */}
            <img src={photo} alt="Example" className="example-image" />
        </div>
    );
}

export default FrontPage;