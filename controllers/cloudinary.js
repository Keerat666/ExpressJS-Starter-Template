const cloudinary = require('cloudinary')

const dotenv = require('dotenv');
const shortid = require('shortid');

dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

function uploads(file, folder) {

    console.log(process.env.CLOUDINARY_API_KEY)

    return new Promise((resolve, reject) => {

        let myId = shortid.generate();

        cloudinary.v2.uploader.upload(file, {
                resource_type: "auto",
                public_id: `${folder}/${myId}`,
                overwrite: true,
            },
            (error, result) => {
                // console.log(result);

                if (error) {

                    reject(error);
                } else {


                    resolve({
                        url: result.secure_url
                    })
                }
            });

    })
}




exports.upload_single_image = async(req, res, next) => {
    {
        const { path } = req.file;
        console.log("PATH : " + path)
        let uploadedObject = {};

        try {

            uploadedObject = await uploads(path, "profile_pictures");
            console.log("cloudinary link : " + uploadedObject.url);


            var x = uploadedObject.url.replace("/upload/", "/upload/q_auto/")
            console.log(x)
            res.status(200).json({ "msg": "File saved", 'url': x });


        } catch (e) {

            res.send("Cloudinary upload failed" + e);
            res.status(500).json({ "msg": "File save failed.", "error": e.Message });

        }
    }
}

exports.upload_single_image_gift = async(req, res, next) => {
    {
        const { path } = req.file;
        console.log("PATH : " + path)
        let uploadedObject = {};

        try {

            uploadedObject = await uploads(path, "gifts");
            console.log("cloudinary link : " + uploadedObject.url);


            var x = uploadedObject.url.replace("/upload/", "/upload/q_auto/")
            console.log(x)
            res.status(200).json({ "msg": "File saved", 'url': x });


        } catch (e) {

            res.send("Cloudinary upload failed" + e);
            res.status(500).json({ "msg": "File save failed.", "error": e.Message });

        }
    }
}

exports.upload_multiple_file = async(req, res) => {
    {
        var ResponseData = [];
        const files = req.files.photos;

        for (const file of files) {

            console.log(file)
            try {

                uploadedObject = await uploads(file.path, req.body.folder);
                console.log("cloudinary link : " + uploadedObject);
                var x = uploadedObject.url.replace("/upload/", "/upload/q_auto/")
                console.log(x)

                ResponseData.push(x);


            } catch (e) {

                res.status(500).json({ "msg": "Save Operation failed.", "error": e });

            }


        }

        res.status(200).json({ "msg": "Files saved successfully.", "url": ResponseData });

    }
}