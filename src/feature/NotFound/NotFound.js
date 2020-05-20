import React from 'react';
import './style.css';
const NotFound = () => {
    return (
        <div className='content-notfound'>
            <div className='super-man'>
                <img
                    src='http://pngimg.com/uploads/superman/superman_PNG9.png'
                />
            </div>
                <div className='title'>404!</div>
                <p>The Page You're Looking For Was Not Found.</p>
                <a className="goback" href="/">Go Back</a>
            </div>
    );
};

export default NotFound;
