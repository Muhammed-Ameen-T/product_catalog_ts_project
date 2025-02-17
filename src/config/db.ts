import mongoose from 'mongoose';
import env from 'dotenv';
env.config()

const connectDB = async () => {
    try {
        const mongoUri = process.env.DB_URL
        if (!mongoUri) {
            throw new Error("MONGO URI is not Defined");
        }
        await mongoose.connect(mongoUri);
        console.log('MongoDB Connected');
    } catch (error) {
        console.log('Error while connecting Database',error);
        process.exit(1);
    }
}

export default connectDB;