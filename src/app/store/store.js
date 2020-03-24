import { observable, action, decorate, runInAction } from "mobx";
import { createContext } from "react";

let index = -1;
var data = JSON.parse(localStorage.getItem("CART"));
class store {
  perfumes = data ? data : [];
  products = [
    {
      id: 1,
      name: "Nước Hoa Menup 50ml",
      price: 100,
      image: "https://via.placeholder.com/286x180/FFFFFF",
      descripe: "Lorem, ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
      id: 2,
      name: "Nước Hoa Menup 150ml",
      price: 300,
      image: "https://via.placeholder.com/286x180/FF00FF",
      descripe: "Lorem, ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
      id: 3,
      name: "Nước Hoa Menup 100ml",
      price: 200,
      image: "https://via.placeholder.com/286x180/FAAFFF",
      descripe: "Lorem, ipsum dolor sit amet consectetur adipisicing elit"
    },
    {
      id: 4,
      name: "Nước Hoa Menup 300ml",
      price: 400,
      image: "https://via.placeholder.com/286x180/FAAFFF",
      descripe: "Lorem, ipsum dolor sit amet consectetur adipisicing elit"
    }
  ];
  onAddToCart = (product, quantity) => {
    index = findProductInCart(this.perfumes, product);
    if (index !== -1) {
      this.perfumes[index].quantity += quantity;
    } else {
      this.perfumes.push({ product, quantity });
    }
    localStorage.setItem("CART", JSON.stringify(this.perfumes));
    return [...this.perfumes];
  };
  onDeleteToCart = product => {
    index = findProductInCart(this.perfumes, product);
    if (index !== -1) {
      this.perfumes.splice(index, 1);
    }
    localStorage.setItem("CART", JSON.stringify(this.perfumes));
    return [...this.perfumes];
  };
  onUpdateQuantity = (product, quantity) => {
    index = findProductInCart(this.perfumes, product);
    if (index !== -1) {
      this.perfumes[index].quantity = quantity;
    }
    localStorage.setItem("CART", JSON.stringify(this.perfumes));
    return [...this.perfumes];
  };
}
const findProductInCart = (cart, product) => {
  var result = -1;
  for (var i = 0; i < cart.length; i++) {
    if (cart[i].product.id == product.id) {
      result = i;
      break;
    }
  }
  return result;
};

decorate(store, {
  products: observable,
  onAddToCart: action,
  perfumes: observable,
  onDeleteToCart: action,
  update: action
});
export default createContext(new store());
