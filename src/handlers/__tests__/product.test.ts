import supertest from "supertest"
import server from "../../server"

describe("Post /api/products", () => {

    it("Should display validation errors", async () =>{
        const response = await supertest(server).post("/api/products").send({})
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("errors")
        expect(response.body.errors).toHaveLength(4)
    })

    it("Should validate that the price is a number and greather than 0", async () =>{
        const response = await supertest(server).post("/api/products").send({
            name: "Monitor Curvo",
            price: "Hola"
        })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("errors")
        expect(response.body.errors).toHaveLength(2)
    })

    it("Should validate that the price is greather than 0", async () =>{
        const response = await supertest(server).post("/api/products").send({
            name: "Monitor Curvo",
            price: 0
        })
        expect(response.status).toBe(400)
        expect(response.body).toHaveProperty("errors")
        expect(response.body.errors).toHaveLength(1)
    })

    it("Should create a new product", async () => {
        const response = await supertest(server).post("/api/products").send({
            name: "Mouse",
            price: 20
        })

        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty("data")

        expect(response.status).not.toBe(400)
        expect(response.status).not.toBe(404)
        expect(response.body).not.toHaveProperty("errors")
    })
})