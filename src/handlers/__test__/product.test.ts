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
