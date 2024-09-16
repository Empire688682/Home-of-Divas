import jwt from 'jsonwebtoken';

export const userToken = (req) =>{
    try {
     const token = req.cookies.get('DCToken')?. value || '';
     if(!token){
        console.log("No token found");
        return null
     }
     const decodedToken = jwt.verify(token, process.env.TOKEN_KEY);
    return decodedToken._id;
    } catch (error) {
        console.log('Error:', error);
    }
}