import React, { useState, useContext } from 'react';
import { Grid, Container, Form, Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { observer } from 'mobx-react-lite';
import storeAPI from '../../app/store/storeAPI';
import { toast } from 'react-toastify';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        content: '',
    });
    const { name, email, phone, content } = formData;
    const isChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const { onAddContact } = useContext(storeAPI);
    const onSubmit = (e) => {
        e.preventDefault();
        onAddContact(formData);
        toast.success('Gửi phàn nàn thành công!');
    };
    return (
        <Container>
            <Grid>
                <Grid.Row>
                    <Grid.Column width='8'>
                        <iframe
                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.7450462087318!2d106.68653931462305!3d10.830812692284638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f7831f88f1%3A0xa8e72c1fa689ed3d!2zOCDEkMaw4budbmcgU-G7kSAxNCwgUGjGsOG7nW5nIDUsIEfDsiBW4bqlcCwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1585730194133!5m2!1svi!2s'
                            width={500}
                            height={400}
                            frameBorder={0}
                            style={{ border: 0 }}
                            allowFullScreen
                            aria-hidden='false'
                            tabIndex={0}
                        />
                    </Grid.Column>
                    <Grid.Column width='7' style={{ marginLeft: '1em' }}>
                        <h2>Ý kiến của bạn</h2>
                        <Form onSubmit={(e) => onSubmit(e)}>
                            <Form.Field>
                                <input
                                    placeholder='Họ và Tên'
                                    name='name'
                                    value={name}
                                    onChange={(e) => isChange(e)}
                                />
                            </Form.Field>
                            <Form.Field>
                                <input
                                    placeholder='Email'
                                    type='Email'
                                    name='email'
                                    value={email}
                                    onChange={(e) => isChange(e)}
                                />
                            </Form.Field>
                            <Form.Field>
                                <input
                                    placeholder='Số Điện Thoại'
                                    name='phone'
                                    value={phone}
                                    onChange={(e) => isChange(e)}
                                />
                            </Form.Field>
                            <Form.Field>
                                <textarea
                                    placeholder='Nội Dung'
                                    name='content'
                                    value={content}
                                    onChange={(e) => isChange(e)}
                                />
                            </Form.Field>
                            <Button fluid type='submit' color='olive'>
                                Gửi
                            </Button>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default observer(Contact);
