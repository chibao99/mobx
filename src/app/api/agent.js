import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:5000/api';
const responseBody = (response) => response.data;

const errBody = (res) => {
    throw res.response.data;
};
const request = {
    get: async (url) => await axios.get(url).then(responseBody),
    post: async (url, body) =>
        await axios.post(url, body).then(responseBody).catch(errBody),
    put: async (url, body) =>
        await axios.put(url, body).then(responseBody).catch(errBody),
    delete: async (url) =>
        await axios.delete(url).then(responseBody).catch(errBody),
};
const Product = {
    getAllProduct: async () => await request.get('/products'),
    addProduct: async (product) => await request.post('/products', product),
    getProductById: async (id) => await request.get(`/products/${id}`),
    deleteProduct: async (id) => await request.delete(`/products/${id}`),
    updateProduct: async (id, body) =>
        await request.put(`/products/${id}`, body),
    getProductByCatalog: async (id) =>
        await request.get(`products/catalog/${id}`),
};
const Contact = {
    getAllContact: async () => await request.get('/contact'),
    addContact: async (contact) => await request.post('/contact', contact),
    deleteContact: async (id) => await request.delete(`/contact/${id}`),
};
const Catalog = {
    getAllCatalog: async () => await request.get('/catalog'),
};
export default { Product, Contact,Catalog };
