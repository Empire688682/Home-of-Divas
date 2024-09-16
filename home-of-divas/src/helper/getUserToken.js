import jwt from 'jsonwebtoken';

export const userToken = (req) => {
    try {
        const token = req.cookies.get('DCToken')?. value || null;
        if (!token) {
            return null;
        }
        const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
        console.log("decodedToken:", decodedToken._id);
        return decodedToken.id; // Make sure your token has 'id' or '_id'
    } catch (error) {
        console.log("Error verifying token:", error);
        return null;
    }
};
