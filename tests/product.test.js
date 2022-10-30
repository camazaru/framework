import { expect } from "chai";
import supertest from "supertest";
import productFactory from "./factory/product.factory.js";
import userFactory from "./factory/user.factory.js";

let request;
let token;

describe("Testing product routes", () => {
  before(async () => {
    request = supertest("http://localhost:3000");

    const postResponse = await request
      .post("/api/user")
      .send({ ...userFactory.generateUser(), password: "cmcarlos" });

    const createdUser = postResponse.body.createdUser;

      const response = await request
      .post("/api/user/login")
      .send({ username: createdUser.username, password: "cmcarlos" });
      //console.log("datos token", response.body.data)

    token = response.body.data;
  });

  describe("- POST /api/product", () => {
    const productToCreate = productFactory.generateProduct();
    //console.log('aqui vamos',productToCreate)
    let response;

    it("Should return 201", async () => {
      response = await request
        .post("/api/product")
        .set({ Authorization: `Bearer ${token}` })
        .send(productToCreate);
        console.log('aqui vamos products',response.status)
        console.log('aqui vamos products',response.body)

      expect(response.status).to.eql(201);
      //console.log('aqui vamos create',productToCreate)
    });
    it("Should return the created product", () => {
      expect(response.body.data.name).to.eql(productToCreate.name);
      expect(response.body.data.price).to.eql(Number(productToCreate.price));
      expect(response.body.data.thumbnail).to.eql(String(productToCreate.thumbnail));
    });
  });
});
