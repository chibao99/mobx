import { observable, action, decorate, runInAction } from 'mobx';
import { createContext } from 'react';
let index = -1;
var data = JSON.parse(localStorage.getItem('CART'));

class store {
    perfumes = data ? data : [];
    

    onAddToCart = (product, quantity) => {
        runInAction(() => {
            index = findProductInCart(this.perfumes, product);
            if (index !== -1) {
                this.perfumes[index].quantity += quantity;
            } else {
                this.perfumes.push({ product, quantity });
            }
            localStorage.setItem('CART', JSON.stringify(this.perfumes));
            return [...this.perfumes];
        });
    };
    onDeleteToCart = (product) => {
        index = findProductInCart(this.perfumes, product);
        if (index !== -1) {
            this.perfumes.splice(index, 1);
        }
        localStorage.setItem('CART', JSON.stringify(this.perfumes));
        return [...this.perfumes];
    };
    onUpdateQuantity = (product, quantity) => {
        index = findProductInCart(this.perfumes, product);
        if (index !== -1) {
            this.perfumes[index].quantity = quantity;
        }
        localStorage.setItem('CART', JSON.stringify(this.perfumes));
        return [...this.perfumes];
    };
}
const findProductInCart = (cart, product) => {
    var result = -1;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].product._id == product._id) {
            result = i;
            break;
        }
    }
    return result;
};

decorate(store, {
    onAddToCart: action,
    perfumes: observable,
    onDeleteToCart: action,
    onUpdateQuantity: action,
});
export default createContext(new store());
