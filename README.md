<!-- ABOUT THE PROJECT -->
## About The Project
# Multi-Microservice Project

### Built With

This project was built using the following technologies:
* [Express](https://expressjs.com/)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<!-- GETTING STARTED -->
## Getting Started

This project includes three microservices that manage clients, products, and sales.

### Prerequisites

Make sure you have Docker Desktop installed on your computer, as well as Postman and the latest version of npm.

* npm
  ```sh
  npm install npm@latest -g

* Windows Version Docker Desktop
[Docker](https://docs.docker.com/desktop/install/windows-install/)

* Windows Postman app version
[Postman](https://www.postman.com/downloads/)

### Installation

_Below is an example of how you can instruct your audience on installing and setting up your app. This template doesn't rely on any external dependencies or services._

1. Clone the repo
   ```sh
   git clone https://github.com/antichrist667/sales.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Open the terminal and type the following command
   ```sh
   docker-compose up --build
   ```

<!-- USAGE EXAMPLES -->
## Usage

### Products Microservice

1. Open Postman and add the following URL in the POST method:
http://localhost:3001/products



2. Add the following body in JSON format:
```json
{
  "name": "New Product"
}

3. Click on the Send button and you will see the following response:

{
  "id": 3,
  "name": "New Product"
}

You can create as many different products as you want. They are stored in memory, but the product name cannot be duplicated.

4. To review the created products, change the endpoint to and switch to the GET method:
http://localhost:3001/products

5. Click on the Send button and you will see the following response:
[
  { "id": 1, "name": "Product 1" },
  { "id": 2, "name": "Product 2" },
  { "id": 3, "name": "New Product" }
]

This example shows how to add a new product and get the list of products using Postman, focused only on the product microservice.


<!-- CONTRIBUTING -->
## Contributing

This project was carried out by the following collaborator:

* [Cristian Caiza](https://github.com/antichrist667)
* [Ariel Campoverde](https://github.com/Matari7)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[Express]: https://img.shields.io/badge/express-8A2BE2
[Express-url]: https://axios-http.com/docs/intro
[Axios-url]: https://reactjs.org/
[JavaScript]: https://img.shields.io/badge/logo-javascript-blue?logo=javascript
[JavaScript-url]: https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/What_is_JavaScript