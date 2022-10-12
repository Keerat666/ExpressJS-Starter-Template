# Express Template

Your go to Backend kit for starting a NodeJS project

To start using this backend at the earliest, a few steps have to be first done

- Create a .env file
- If you want to connect to a mongo instance, initialise the variable mongoPath
- If you want to use cloudinary then intitialise 

```
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
```

- the swagger documentation is available at localhost:8000/api-docs
- the adminbro dashboard is available at localhost:3000
- for the detailed API's documentation, there is a json file in docs, which can be easily imported to Postman

This repository is completly open source and can be used by anyone.

Also this repository can be deployed to Heroku as it is and it would start running without any other configuration if the .env file is in place.

In case you want to add a feature to this repository, please feel free to raise issues and I would be more than happy for you to contribute this repo 👨🏽‍💻

