import app from './app';
import env from 'dotenv';
env.config()

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})
