import React, { useContext } from 'react';
import {
    Grid,
    Menu,
    Container,
    Button,
    Icon,
} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { Route, Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import store from '../../app/store/store';
const HeaderMenu = () => {
    const { perfumes } = useContext(store);
    return (
        <Container>
            <Grid style={{ marginTop: '1em', marginBottom: '1em' }}>
                <Grid.Column>
                    <Menu size='large' pointing tabular>
                        {showMenus(menus)}
                        <Menu.Item position='right'>
                            <Link to='/cart'>
                                <Button animated='vertical'>
                                    <Button.Content hidden>
                                        {perfumes.length}
                                    </Button.Content>
                                    <Button.Content visible>
                                        <Icon name='shop' />
                                    </Button.Content>
                                </Button>
                            </Link>
                            <Link to="/manager">
                            <Button>
                                <Icon name='address card outline' />
                                Quản Lý
                            </Button>
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Grid.Column>
            </Grid>
        </Container>
    );
};
const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: true,
    },
    {
        name: 'Sản Phẩm',
        to: '/perfumes',
        exact: false,
    },
    {
        name: 'FAQs',
        to: '/FAQs',
        exact: false,
    },
    {
        name: 'Liên Hệ',
        to: '/contact',
        exact: false,
    },
];
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => {
                return (
                    <Link to={to}>
                        <Menu.Item>{label}</Menu.Item>
                    </Link>
                );
            }}
        />
    );
};
const showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
        result = menus.map((menu, index) => {
            return (
                <MenuLink
                    key={index}
                    to={menu.to}
                    label={menu.name}
                    activeOnlyWhenExact={menu.exact}
                />
            );
        });
    }
    return result;
};
export default observer(HeaderMenu);
