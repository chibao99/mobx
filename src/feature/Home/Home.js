import React from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
import './home.css';
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
        </Container>
    );
};
export default Home;
