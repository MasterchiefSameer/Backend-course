const request = require("supertest");
const app = require('./index8Testing_and_deployment.js')

describe("ID and title must be given",()=>{
    test("the app should respond with status code of 200",async ()=>{   //callback funt
        // This line sends a POST request to the /product endpoint of the application with the specified 
        //JSON payload. The await keyword is used to wait for the response from the server.
        const response = await request(app).post("/product").send({ 
            ID:"ID",
            title:"title"
        }) 
    // This line asserts that the HTTP status code of the response is 200 (OK).
    // If the status code is not 200, the test will fail.
        expect(response.statusCode).toBe(200)
    //This line is not necessary in this case, as the test is already asynchronous due to the use of await. 
    //However, it's a good practice to include done() to indicate that the test is complete.
        done();
    })
})