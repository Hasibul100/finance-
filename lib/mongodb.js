import mongoose from "mongoose"

const mongoConnect = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/user')
        console.log("mongoose connect")
    } catch (error) {
        console.log("could not connect", error)
    }
}
export default mongoConnect;