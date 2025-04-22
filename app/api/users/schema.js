const { default: mongoose } = require("mongoose");

const UserSchema = mongoose.Schema({
    name: { type: String },
    email: { type: String },
})

// const User = mongoose.models("User", UserSchema)
// export default User

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
