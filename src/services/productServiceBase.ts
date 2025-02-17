import Product, { IProduct } from '../models/product';

abstract class ProductServiceBase {
  async createProduct(product: IProduct): Promise<IProduct> {
    return await product.save();
  }

  async getAllProducts(): Promise<IProduct[]> {
    return await Product.find();
  }
}

export default ProductServiceBase;
