import React, { useContext, useEffect} from 'react';
import { Table, Button } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import storeAPI from '../../app/store/storeAPI';
import { toast } from 'react-toastify';

const ManagerContact = () => {
    const { onGetContactApi, onDeleteContact, contacts } = useContext(storeAPI);

    useEffect(() => {
        onGetContactApi();
    }, [onGetContactApi]);

    const onDelete = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa không ?')) {
            onDeleteContact(id);
            window.location.reload(false);
            toast.success('Xóa thành công');
        } else {
            toast.error('Xóa thất bại');
        }
    };

    return (
        <Table celled textAlign='center' color='olive'>
            <Table.Header>
                <Table.Row>
                    <Table.Cell>STT</Table.Cell>
                    <Table.Cell>Tên</Table.Cell>
                    <Table.Cell>Số Điện Thoại</Table.Cell>
                    <Table.Cell>Email</Table.Cell>
                    <Table.Cell>Nội Dung</Table.Cell>
                    <Table.Cell>Hành Động</Table.Cell>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                {contacts.map((val, index) => {
                    return (
                        <Table.Row key={index}>
                            <Table.Cell>{index}</Table.Cell>
                            <Table.Cell>{val.name}</Table.Cell>
                            <Table.Cell>{val.phone}</Table.Cell>
                            <Table.Cell>{val.email}</Table.Cell>
                            <Table.Cell>{val.content}</Table.Cell>
                            <Table.Cell>
                                <Button
                                    color='red'
                                    onClick={() => {
                                        onDelete(val._id);
                                    }}
                                >
                                    Xóa
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    );
                })}
            </Table.Body>
        </Table>
    );
};

export default observer(ManagerContact);
