import mongoose,{Schema,Document} from 'mongoose';

enum ProductCategory {
    ELECTRONICS = 'electronics',
    CLOTHING = 'clothing',
    BOOKS = 'books',
    HOME = 'home',
    SPORTS = 'sports'
}

export interface IProduct extends Document{
    name:string;
    description:string;
    category: ProductCategory;
    regularPrice:number;
    salePrice:number;
    warranty:string;
}

const ProductSchema: Schema = new Schema({
    name:{
        type: String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:Object.values(ProductCategory),
        required:true
    },
    salePrice:{
        type:Number,
        required:true
    },
    regularPrice:{
        type:Number,
        required:true
    },
    warranty:{
        type:String,
    }
},{timestamps:true})

const Product = mongoose.model<IProduct>('Product',ProductSchema);
export default Product;