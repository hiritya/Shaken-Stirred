const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/api/v1/index.js'];

const doc = {
    info: {
        version: "1.0.0",
        title: "Cocktail Bar",
        description: "Documentation for the Cocktail Bar API"
    },
    host:"localhost:3000",
    basePath:"/api/v1",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json']
}

swaggerAutogen(outputFile, endpointsFiles, doc);