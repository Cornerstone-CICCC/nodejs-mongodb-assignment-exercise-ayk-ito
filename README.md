[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/mrg4z5Cv)
# NodeJS - NoSQL MongoDB Assignment Exercise

**Goal:** Get familiar with NodeJS, Express, and MongoDB with MVC structure.

## Instructions

1. Run `npm install` to install all the necessary packages.
2. Create a new database called `store` on your MongoDB Cluster. For the first collection, name it `products`.
3. Make sure your IP address is allowed to access the cluster. You can include it by going to **Network Access** in MongoDB.
4. Update your `server.ts` to connect to your MongoDB Cluster and database using the connection string. For reference, this is what a typical connection string looks like:

    ```bash
    mongodb+srv://<db_user>:<db_password>@ciccc.o8yo3tc.mongodb.net/<db_name>?retryWrites=true&w=majority&appName=<cluster_name>
    ```

5. For security reasons, it would be better to put this string inside the `.env` file.
6. Create your MVC file structure:

    - `product.model.ts`
    - `product.controller.ts`
    - `product.routes.ts`

7. For the fields of your model:

    - `productName`: String, required
    - `productPrice`: Number, required

8. Create your CRUD functionality where you can fetch all, fetch one, add, edit, and delete products.
9. Test your API routes using Postman and verify that you are able to do CRUD.
10. Once you are done, commit and push your changes.

Good luck! :)
