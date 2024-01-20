import express from 'express';
import mongoose from 'mongoose';
import dotenv from"dotenv";
import userRouter from "./routes/user.route.js"
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import cookieParser from 'cookie-parser';
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log("Connected to MongoDB perfectly");
}).catch((error) => {
    console.log(error);
})



const app = express();

const PORT = 3200;

app.use(express.json());

app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}!!!`);
})

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);





app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});