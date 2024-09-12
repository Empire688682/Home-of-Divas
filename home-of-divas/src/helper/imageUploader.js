import multer from "multer";

    const storage = multer.diskStorage({
        destination: "public",
        filename:(req,file,cb)=>{
            return cb(null, `${Date.now()}-${file.originalname}`);
        }
    });

export const upload = multer({storage:storage});

