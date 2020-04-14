import React from 'react';
import { Container, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
export const Home = () => {
    return (
        <Container>
            <div className='welcome'>
                <span className='title-wel'>Welcome to Our Website</span>
                <Link to='/perfumes'>
                    <Button color='olive' size='large'>
                        Sản Phẩm
                    </Button>
                </Link>
            </div>
        </Container>
    );
};
export default Home;
