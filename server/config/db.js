const mongoose=require('mongoose')
 const connectDB = async function () {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('db connection success')
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports = connectDB;










