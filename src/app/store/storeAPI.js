import { decorate, observable, runInAction } from 'mobx';
import { createContext } from 'react';
import callApi from '../../Utils/apiCaller';
class storeAPI {
    products = [];
    contacts = [];
    getProductApi = async () => {
        return callApi('products', 'GET', null).then((res) => {
            runInAction(() => {
                this.products = res.data;
            });
        });
    };

    addProduct = async (product) => {
        try {
            await callApi('products', 'POST', product).then((res) => res.data);
        } catch (err) {
            return err.response.data.errors;
        }
    };

    onDeleteProduct = async (id) => {
        await callApi(`products/${id}`, 'DELETE', null).then((res) => res.data);
    };

    getProductById = async (id) => {
        return callApi(`products/${id}`, 'GET', null).then((res) => res.data);
    };

    onUpdateProduct = async (product, id) => {
        await callApi(`products/edit/${id}`, 'PUT', product).then(
            (res) => res.data
        );
    };
    // Contact
    onGetContactApi = async () => {
        return callApi('contact', 'GET', null).then((res) =>
            runInAction(() => {
                this.contacts = res.data;
            })
        );
    };
    // Delete contact
    onDeleteContact = async (id) => {
        await callApi(`contact/${id}`, 'DELETE', null).then((res) => res.data);
    };
    // Add contact
    onAddContact = async (contact) => {
        try {
            await callApi('contact', 'POST', contact).then((res) => res.data);
        } catch (err) {
            console.log(err.response.data.errors);
        }
    };
}
decorate(storeAPI, {
    products: observable,
    contacts: observable,
});
export default createContext(new storeAPI());
