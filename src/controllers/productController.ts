import {Request, Response} from 'express';
import ProductService from '../services/productServices';
import Product, { IProduct } from '../models/product';
import cloudinary  from '../config/cloudinaryConfig'

class ProductController {
    async createProduct(req: Request, res: Response): Promise<void> {
        const { category, name, regularPrice, salePrice, description } = req.body;
        console.log(req.body);
        const product = new Product({ name, description, category, regularPrice, salePrice});

        try {
            const savedProduct = await ProductService.createProduct(product);
            res.status(201).json(savedProduct);
        } catch (error) {
            res.status(400).json({error:error instanceof Error ? error.message : 'Unknown Error'})
        }
    }

    async getAllProducts(req: Request, res: Response): Promise<void> {
        try {
        const products = await ProductService.getAllProducts();
            res.render('\home',{
                title: 'Product Catalog',
                products
            })
        } catch (error) {
            res.status(400).json({error:error instanceof Error ? error.message : 'Unknown Error'})
        }
    }  
}

export default new ProductController();
