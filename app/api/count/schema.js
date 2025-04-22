const mongoose = require("mongoose");

const CountSchema = new mongoose.Schema({
    method: String,
    source: String,
    amount: String,
    fund: String,
    date: Date,
    createOn: {
        type: Date,
        default: Date.now
    }
})

// const User = mongoose.models("User", UserSchema)
// export default User

const Count = mongoose.models.Count || mongoose.model("Count", CountSchema);

export default Count;
