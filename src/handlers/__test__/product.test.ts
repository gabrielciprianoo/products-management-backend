import request from "supertest";
import server from "../../server";

describe("POST /api/products", () => {
  test("should validation product", async () => {
    const response = await request(server).post("/api/products").send({});

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors).toHaveLength(6);

    expect(response.status).not.toBe(201);
    expect(response.body.errors).not.toHaveLength(2);
  });

  test("should validate that price is greater than 0", async () => {
    const response = await request(server).post("/api/products").send({
      name: "mouse",
      price: 0,
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors).toHaveLength(1);

    expect(response.status).not.toBe(201);
    expect(response.body.errors).not.toHaveLength(2);
  });

  test("should validate that price is a number", async () => {
    const response = await request(server).post("/api/products").send({
      name: "mouse",
      price: "hola",
    });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors).toHaveLength(2);

    expect(response.status).not.toBe(201);
    expect(response.body.errors).not.toHaveLength(3);
  });

  test("should create a new product", async () => {
    const response = await request(server).post("/api/products").send({
      name: "mouse testing",
      price: 50,
    });

    expect(response.status).toBe(201);
    expect(response.status).not.toBe(400);
    expect(response.status).not.toBe(404);
    expect(response.status).not.toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body).not.toHaveProperty("errors");
  });
});

describe("GET /api/products", () => {
  
  test("should check if /api/products exist", async () => {
    const response = await request(server).get("/api/products");
    expect(response.status).not.toBe(404);
  });

  test("should get all products", async () => {
    const response = await request(server).get("/api/products");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.headers['content-type']).toMatch(/json/);
  });

})

describe("GET /api/products/:id", () => {

  test("should check if /api/products/:id exist", async () => {
    const response = await request(server).get("/api/products/1");
    expect(response.status).not.toBe(404);
    expect(response.body).toHaveProperty("data");
  });

  test("should check a valid ID in the URL", async () => {
    const response = await request(server).get("/api/products/invalid-id");
    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("errors");
    expect(response.body.errors[0].msg).toBe("ID no valido")
  });

  test("should get a product by id", async () => {
    const response = await request(server).get("/api/products/1");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.headers['content-type']).toMatch(/json/);
  });

  test("should return 404 for non-existing product", async () => {
    const response = await request(server).get("/api/products/9999");
    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("error");
  });
});
