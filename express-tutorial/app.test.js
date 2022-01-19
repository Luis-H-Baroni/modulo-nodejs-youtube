const app = require("./app")
const request = require("supertest")

describe("GET de /api/pessoas", () => {
	it("Deve retornar status code 200", async () => {
		const resposta = await request(app).get("/api/pessoas")
		console.log(resposta)
		expect(resposta.statusCode).toBe(200)
	})
	it("Deve retornar JSON", async () => {
		const resposta = await request(app).get("/api/pessoas")
		expect(resposta.headers["content-type"]).toEqual(
			expect.stringContaining("json")
		)
	})
})
describe("POST de /pessoas", () => {
	it("Deve retornar status code 200", async () => {
		const resposta = await request(app).post("/api/pessoas").send({
			id: 10,
			name: "abel",
		})
		expect(resposta.statusCode).toBe(201)
	})
	it("Deve retornar JSON", async () => {
		const resposta = await request(app).post("/api/pessoas").send({
			id: 10,
			name: "abel",
		})
		expect(resposta.headers["content-type"]).toEqual(
			expect.stringContaining("json")
		)
	})
})
