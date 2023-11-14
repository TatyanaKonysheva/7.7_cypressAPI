describe("user API", () => {
  it("should create user", () => {
    cy.createUser();
  });

  it("should update user", () => {
    cy.createUser();
    cy.request("PUT", "https://petstore.swagger.io/v2/user/OneName", {
      id: 222,
      username: "OneName",
      firstName: "Nina",
      lastName: "Ivanova",
      email: "nina@mail.com",
      password: "1478",
      phone: "+79199361234",
      userStatus: 2,
    }).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: "222",
      });
    });
  });
  it("should delete user", () => {
    cy.createUser();
    cy.request("DELETE", "https://petstore.swagger.io/v2/user/OneName", {
      username: "OneName",
    }).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: "OneName",
      });
    });
  });
});

/*describe("User store API", () => {
  beforeEach(() => {});
  it("should create user", () => {
    cy.request("POST", "https://petstore.swagger.io/v2/user", {
      id: 333,
      username: "Anna",
      firstName: "Ivanova",
      lastName: "Ivanovna",
      email: "ivana@mail.ru",
      password: "1234",
      phone: "+79199874456",
      userStatus: 3,
    }).then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eql({
        code: 200,
        type: "unknown",
        message: "333",
      });
    });
  });

  it("should update user", () => {
    cy.request("PUT", "https://petstore.swagger.io/v2/user/Anna", {
      id: 444,
      username: "Nina",
      firstName: "Ivanova",
      lastName: "Alex",
      email: "nina@mail.ru",
      password: "12345",
      phone: "+79199874466",
      userStatus: 4,
    }).then((response) => {
      expect(response.status).be.eq(200);
      expect(response.body).be.eql({
        code: 200,
        type: "unknown",
        message: "444",
      });
    });
  });

  it.only("should delete user", () => {
    cy.request("DELETE", "https://petstore.swagger.io/v2/user/Anna", {
      username: "Anna",
    }).then((response) => {
      expect(response.status).be.eql(200);
      expect(response.body).be.eqls({
        code: 200,
        type: "unknown",
        message: "Anna",
      });
    });

    it.skip("should delete user", () => {
      cy.request("DELETE", "https://petstore.swagger.io/v2/user/Anna", {
        username: "Anna",
      })
        .then((response) => {
          expect(response.status).be.eq(200);
        })
        .then((response) => {
          expect(response.status).be.eq(200);
          expect(response.body).be.eqls({
            code: 200,
            type: "unknown",
            message: "444",
          });
        });
    });
  });
});*/
