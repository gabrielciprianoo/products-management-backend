import swaggerJSDoc from "swagger-jsdoc";

const options: swaggerJSDoc.Options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    tags: [
      {
        name: "Products",
        description: "Operations related to products management",
      },
    ],
    info: {
      title: "Products Management API",
      version: "1.0.0",
      description: "API documentation for Products Management service",
    },
    servers: [
      {
        url: "http://localhost:4000",
        description: "Development server",
      },
    ],
    apis: ["./src/routes/*.ts", "./src/models/*.ts"],
  },
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
