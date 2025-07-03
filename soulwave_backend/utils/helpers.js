const jwt = require("jsonwebtoken");

exports.getToken = async (user) => { // Accept user as a parameter
    if (!user || !user._id) {
        throw new Error("Invalid user object"); // Handle undefined user
    }

    const token = jwt.sign(
        { identifier: user._id.toString() }, // Ensure `_id` is a string
        process.env.SECRET_KEY,
    );

    return token;
};

module.exports = exports;
