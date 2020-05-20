import React, { useState, useContext, useEffect } from 'react';
import {
    Table,
    Button,
    Form,
    Divider,
    TextArea,
    Grid,
    Segment,
} from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import 'semantic-ui-css/semantic.min.css';
import storeAPI from '../../app/store/storeAPI';
import { toast } from 'react-toastify';
const ManagerProduct = () => {
    const [display, setDisplay] = useState(false);
    const {
        getProductApi,
        addProduct,
        onDeleteProduct,
        getProductById,
        products,
        onUpdateProduct,
        catalogs,
        onGetCatalog,
    } = useContext(storeAPI);
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        image: '',
        price: '',
        inventory: '',
        desc: '',
        catalog: '',
    });
    const { name, image, price, inventory, desc, id, catalog } = formData;

    const isChange = (e) => {
        let value =
            e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({ ...formData, [e.target.name]: value });
    };

    const refreshPage = () => {
        window.location.reload(false);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (id) {
            onUpdateProduct(formData, id);
            refreshPage();
        } else {
            addProduct(formData);
            refreshPage();
            toast.success('Thêm mới thành công');
        }
        console.log(formData.image)

    };
    const changeStatus = () => {
        setDisplay(!display);
    };

    useEffect(() => {
        getProductApi();
        onGetCatalog();
    }, []);

    const deleteProdust = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa không')) {
            onDeleteProduct(id);
            toast.success('Xóa thành công !!!');
            refreshPage();
        } else {
            toast.error('Xóa không thành công!!!');
        }
    };

    const getIdProduct = (id) => {
        getProductById(id).then((res) => {
            setFormData({
                id: res[0]._id,
                name: res[0].name,
                price: res[0].price,
                inventory: res[0].inventory,
                desc: res[0].desc,
            });
        });
        setDisplay(true);
    };

    const getColonFormatDate = (date) => date.toString().slice(0, 10);

    const formatMonney = (num) =>
        num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

    const displayForm = () => {
        if (display === true) {
            return (
                <Segment raised style={{ margin: '1em' }}>
                    <Form onSubmit={(e) => onSubmit(e)}>
                        <Form.Field>
                            <select
                                name='catalog'
                                value={catalog}
                                onChange={(e) => isChange(e)}
                            >
                                <option disabled value='' selected>
                                    Loại sản phẩm
                                </option>
                                {catalogs.map((val, index) => {
                                    return (
                                        <option key={index} value={val._id}>
                                            {val.name}
                                        </option>
                                    );
                                })}
                            </select>
                        </Form.Field>
                        <Form.Input
                            type='text'
                            name='name'
                            value={name}
                            onChange={(e) => isChange(e)}
                            placeholder='Nhập Tên Sản Phẩm'
                        />
                        <Form.Input
                            type='number'
                            name='price'
                            value={price}
                            onChange={(e) => isChange(e)}
                            placeholder='Nhập Giá Sản Phẩm'
                        />
                        <Form.Input
                            name='image'
                            value={image}
                            onChange={(e) => isChange(e)}
                            type='file'
                        />
                        <Form.Field style={{ margin: '1em 0' }}>
                            <Form.Input
                                type='number'
                                name='inventory'
                                value={inventory}
                                onChange={(e) => isChange(e)}
                                placeholder='Nhập số lượng Sản Phẩm'
                            />
                            <TextArea
                                name='desc'
                                value={desc}
                                onChange={(e) => isChange(e)}
                                placeholder='Mô tả về sản phẩm'
                            />
                        </Form.Field>
                        <Form.Field>
                            <Button
                                fluid
                                content='Gửi'
                                icon='arrow up'
                                labelPosition='right'
                                type='submit'
                            />
                        </Form.Field>
                    </Form>
                </Segment>
            );
        }
    };
    const changeButton = () => {
        if (display === false) {
            return (
                <Button color='purple' fluid onClick={() => changeStatus()}>
                    Thêm Mới
                </Button>
            );
        } else {
            return (
                <Button color='purple' fluid onClick={() => changeStatus()}>
                    Đóng Lại
                </Button>
            );
        }
    };
    return (
        <Grid>
            <Grid.Column width='11'>
                <Table celled padded color='olive'>
                    <Table.Header>
                        <Table.Row>
                            <Table.Cell>STT</Table.Cell>
                            <Table.Cell>Tên Sản Phẩm</Table.Cell>
                            <Table.Cell>Giá Sản Phẩm</Table.Cell>
                            <Table.Cell>Trạng Thái</Table.Cell>
                            <Table.Cell>Ngày Nhập</Table.Cell>
                            <Table.Cell>Hành Động</Table.Cell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {products.map((val, index) => {
                            return (
                                <Table.Row key={index} textAlign='center'>
                                    <Table.Cell>{index}</Table.Cell>
                                    <Table.Cell>{val.name}</Table.Cell>
                                    <Table.Cell>
                                        {formatMonney(val.price)} VND
                                    </Table.Cell>
                                    <Table.Cell>{val.inventory}</Table.Cell>
                                    <Table.Cell>
                                        {getColonFormatDate(val.date)}
                                    </Table.Cell>
                                    <Table.Cell>
                                        <Button.Group>
                                            <Button
                                                onClick={() =>
                                                    getIdProduct(val._id)
                                                }
                                            >
                                                Chỉnh Sửa
                                            </Button>
                                            <Button.Or />
                                            <Button
                                                onClick={() =>
                                                    deleteProdust(val._id)
                                                }
                                                color='red'
                                            >
                                                Xóa
                                            </Button>
                                        </Button.Group>
                                    </Table.Cell>
                                </Table.Row>
                            );
                        })}
                    </Table.Body>
                </Table>
            </Grid.Column>
            <Grid.Column width='5'>
                {changeButton()}
                <Divider horizontal />
                {displayForm()}
            </Grid.Column>
        </Grid>
    );
};

export default observer(ManagerProduct);
