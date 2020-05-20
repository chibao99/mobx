import React from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
import './home.css';
import { Slide } from 'react-slideshow-image';
const slideImages = [
    'https://thuvienhinhanh.net/wp-content/uploads/2016/07/nhung-hinh-anh-hoang-hon-day-thi-vi-tren-bai-bien-2.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/3/37/Ho%C3%A0ng_h%C3%B4n_nh%C3%ACn_n%C3%BAi_Tr%C3%A0m_M%C3%A2y_4.jpg',
    'https://thuvienhinhanh.net/wp-content/uploads/2016/05/hinh-anh-bien-hoang-hon-buon-khien-tam-hon-lay-dong-1.jpg',
];
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
};
export const Home = () => {
    return (
        <Container>
            <div className='banner'>
                <div className='content-banner'>
                    <p>Welcome to my website</p>
                    <Link to='/perfumes'>
                        <button>Sản Phẩm</button>
                    </Link>
                </div>
            </div>
            <Slide {...properties}>
                <div className='each-slide'>
                    <div
                        style={{ backgroundImage: `url(${slideImages[0]})` }}
                    ></div>
                </div>
                <div className='each-slide'>
                    <div
                        style={{ backgroundImage: `url(${slideImages[1]})` }}
                    ></div>
                </div>
                <div className='each-slide'>
                    <div
                        style={{ backgroundImage: `url(${slideImages[2]})` }}
                    ></div>
                </div>
            </Slide>
        </Container>
    );
};
export default Home;
