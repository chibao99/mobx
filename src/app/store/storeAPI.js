import { decorate, observable, runInAction } from 'mobx';
import { createContext } from 'react';
import api from '../../app/api/agent';
class storeAPI {
    products = [];
    contacts = [];
    productsByCatalog = [];
    catalogs = [];
    getProductApi = async () => {
        try {
            const data = await api.Product.getAllProduct();
            runInAction(() => {
                this.products = data;
            });
        } catch (error) {
            console.log(error);
        }
    };

    addProduct = async (product) => {
        try {
            await api.Product.addProduct(product);
        } catch (err) {
            console.log(err);
        }
    };

    onDeleteProduct = async (id) => {
        try {
            await api.Product.deleteProduct(id);
        } catch (error) {
            console.log(error);
        }
    };

    getProductById = async (id) => {
        try {
            return await api.Product.getProductById(id);
        } catch (error) {
            console.log(error);
        }
    };

    onUpdateProduct = async (product, id) => {
        try {
            await api.Product.updateProduct(id, product);
        } catch (error) {
            console.log(error);
        }
    };
    // Contact
    onGetContactApi = async () => {
        try {
            const data = await api.Contact.getAllContact();
            runInAction(() => {
                this.contacts = data;
            });
        } catch (error) {
            console.log(error);
        }
    };
    // Delete contact
    onDeleteContact = async (id) => {
        try {
            await api.Contact.deleteContact(id);
        } catch (error) {
            console.log(error);
        }
    };
    // Add contact
    onAddContact = async (contact) => {
        try {
            await api.Contact.addContact(contact);
        } catch (err) {
            console.log(err);
        }
    };

    // Get product by name
    getProductByCatalog = async (id) => {
        try {
            const data = await api.Product.getProductByCatalog(id);
            runInAction(() => {
                this.productsByCatalog = data;
            });
        } catch (error) {
            console.log(error);
        }
    };
    onGetCatalog = async () => {
        try {
            const data = await api.Catalog.getAllCatalog();
            runInAction(() => {
                this.catalogs = data;
            });
        } catch (error) {
            console.log(error);
        }
    };
}
decorate(storeAPI, {
    products: observable,
    contacts: observable,
    productsByCatalog: observable,
    catalogs: observable,
});
export default createContext(new storeAPI());
