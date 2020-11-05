import { Injectable } from '@nestjs/common';
import productsMock from './products-mock';


@Injectable()
export class ProductsService {
    products = [...productsMock];

    createProduct(productInfo) {
        this.products.push(productInfo);
    }

    getAllProducts() {
        return this.products;
    }

    getProductById(productId) {
        return this.products.find(product => product.id === productId);
    }

    updateProductById(productId, newProductInfo) {
        let product = this.products.find(product => product.id === productId);

        if (product) {
            product = newProductInfo;
        }
    }

    removeProductById(productId) {
        this.products = this.products.filter(product => product.id === productId);
    }

}
