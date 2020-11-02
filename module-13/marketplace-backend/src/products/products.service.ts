import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    products = [];

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
        product = newProductInfo;
    }

    removeProductById(productId) {
        this.products = this.products.filter(product => product.id === productId);
    }

}
