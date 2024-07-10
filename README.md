<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Escudo_de_la_Universidad_Central_del_Ecuador_-_Andr%C3%A9s_Agual.png/300px-Escudo_de_la_Universidad_Central_del_Ecuador_-_Andr%C3%A9s_Agual.png" alt="Project logo"></a>
</p>

<h3 align="center">Sales Microservices</h3>

<div align="center">

[![Express][Express]][Express-url]()
[![JavaScript][JavaScript]][JavaScript-url]
[![Docker Hub][DockerHub-logo]][DockerHub-url]
[![AWS][AWS-logo]][AWS-url]


</div>

---



## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 About <a name = "about"></a>

The "Sales Microservices" project is an API that manages clients, sales, and products. Its purpose is to provide a simple interface for handling data for a store or sales company, allowing you to add and query information about clients, sales, and products. It is developed using Node.js with the Express framework and the body-parser library for handling HTTP requests and JSON data.

## 🏁 Getting Started <a name = "getting_started"></a>


### Prerequisites

You must have the Docker desktop downloaded on the computer, due to the docker-compose in addition to having Postman installed, y la version de npm instalada
* npm
  ```sh
  npm install npm@latest -g
  ```
* Windows Version Docker Desktop
[Docker](https://docs.docker.com/desktop/install/windows-install/)

* Windows Postman app version
[Postman](https://www.postman.com/downloads/)

### Installing


Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/antichrist667/multirepo.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Open the terminal and type the following command
   ```sh
   docker-compose up --build
   ```


## 🎈 Usage <a name="usage"></a>

1. Open Postman and add the following URL in the POST method:
```sh
http://localhost:3000/clients
http://localhost:3001/products
http://localhost:3002/sales
```
2. Get all clients

GET /clients

Response:

[
    { "id": 1, "name": "Cristian" },
    { "id": 2, "name": "Roberto" }
]

Add a new client
POST /clients

Request body:
{
    "name": "New Client"
}

Response:
{
    "id": 3,
    "name": "New Client"
}

Sales

Get all sales

GET /sales

Response:

[
    { "id": 1, "totalPrice": 100.0 },
    { "id": 2, "totalPrice": 200.0 }
]

Add a new sale

POST /sales

Request body:

{
    "totalPrice": 150.0
}

Response:

{
    "id": 3,
    "totalPrice": 150.0
}

Products

Get all products

GET /products

Response:

[
    { "id": 1, "name": "Producto 1" },
    { "id": 2, "name": "Producto 2" }
]

Add a new product

POST /products

Request body:

{
    "name": "New Product"
}

Response:

{
    "id": 3,
    "name": "New Product"
}

## 🚀 Deployment <a name = "deployment"></a>

### Additional Notes for Deployment on a Live System

To deploy the "Sales" project on a live system, we use GitHub Actions for CI/CD and Docker for containerization. The deployment process involves building Docker images for each service (clients, products, sales), pushing these images to Docker Hub, and then deploying them to an AWS EC2 instance. The following steps outline this process in detail:

1. **GitHub Actions Workflow Setup**
   - **Trigger on Push to Main Branch**: The workflow is triggered whenever there is a push to the main branch of the repository.
   - **Checkout Code**: The first step in the workflow is to check out the code from the repository.
   - **Docker Hub Login**: The workflow logs in to Docker Hub using the credentials stored in GitHub Secrets.
   - **Build and Push Docker Images**: For each service (clients, products, sales), the workflow builds a Docker image and pushes it to Docker Hub. The images are tagged with `latest`.
   - **Update Docker Compose File**: The workflow updates the paths in the `docker-compose.yml` file to ensure it uses the correct build context.
   - **Execute Docker Compose**: The workflow uses Docker Compose to bring up the services defined in the `docker-compose.yml` file.

2. **Deploy to AWS EC2**
   - **Set Permissions for Private Key**: The workflow sets the appropriate permissions for the private key used to access the EC2 instance.
   - **Pull Docker Images**: The workflow pulls the latest Docker images for each service from Docker Hub onto the EC2 instance.
   - **Stop Running Containers**: Any running containers for the services are stopped and removed.
   - **Remove Old Docker Images**: The workflow prunes old Docker images to free up space.
   - **Run New Containers**: The latest Docker images are run as new containers on the EC2 instance, mapping the appropriate ports to ensure the services are accessible.

By following these steps, the deployment process ensures that the latest version of the "Sales" project is built, tested, and deployed in an automated and consistent manner. This setup helps in maintaining continuous integration and continuous deployment, making it easier to manage and scale the application in a production environment.



## ⛏️ Built Using <a name = "built_using"></a>


- [Express](https://expressjs.com/) - Server Framework

- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

* [Cristian Caiza](https://github.com/antichrist667)
* [Ariel Campoverde](https://github.com/Matari7)


## 🎉 Acknowledgements <a name = "acknowledgement"></a>

- **Inspiration**: The main inspiration for this project was the goal of passing the semester and gaining new programming knowledge. But most importantly, to pass the semester with a smile!c:


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Express]: https://img.shields.io/badge/express-8A2BE2
[Express-url]: https://axios-http.com/docs/intro
[Axios]: https://img.shields.io/badge/Axios-1A79F5
[Axios-url]: https://reactjs.org/
[JavaScript]: https://img.shields.io/badge/logo-javascript-blue?logo=javascript
[JavaScript-url]: https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript