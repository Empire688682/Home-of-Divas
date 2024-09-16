import jwt from 'jsonwebtoken';

export const userToken = (req) => {
    try {
        // Extract the 'Authorization' header
        const authHeader = req.headers.get('authorization');
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            console.log("No token or wrong format in authorization header");
            return null;
        }

        // Extract the token from the 'Bearer' format
        const token = authHeader.split(' ')[1];
        if (!token) {
            console.log("Token not found");
            return null;
        }

        // Verify the token
        const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
        return decodedToken.id; // Make sure your token has 'id' or '_id'
    } catch (error) {
        console.log("Error verifying token:", error);
        return null;
    }
};
