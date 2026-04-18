const request = require('supertest')
const app = require('../app')

describe("GET /", ()=>{ // write api to test and testcases in callback
    it("should return 200 OK", async ()=>{ // for simple req no data

        const res = await request(app).get("/");

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({message: "Hello!"});

    })

})