import ProductServiceBase from './productServiceBase';
import Product, { IProduct } from '../models/product';

class ProductService extends ProductServiceBase {
  async createProduct(product: IProduct): Promise<IProduct> {
    switch (product.category) {
      case 'electronics':
      case 'sports':
        product.warranty = '1 year';
        break;
      case 'clothing':  
      case 'books':
        product.warranty = '6 months';
        break;
      default:
        product.warranty = '1 Month'
    }

    return await super.createProduct(product);
  }
}

export default new ProductService();
