import mongoose from 'mongoose';

export async function connect() {
    try {
        // mongodb://0.0.0.0:27017/netflix
        mongoose.connect("mongodb+srv://vaibhav:Vaibhav123@cluster0.4swhg2i.mongodb.net/");
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB connected successfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
            process.exit();
        })

    } catch (error) {
        console.log('Something goes wrong!');
        console.log(error);
        
    }


}