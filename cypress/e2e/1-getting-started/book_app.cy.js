/// <reference types="cypress" />
beforeEach(() => {
  cy.visit("http://localhost:3000/");
});

describe("check login", () => {
  it("start page visible", () => {
    cy.contains("Books list").should("be.visible");
  });

  it("succesfull login", () => {
    cy.contains("Log in").click();
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });

  it("unsuccesfull login", () => {
    cy.contains("Log in").click();
    cy.login("xxxxx@mail.ru", "xxx");
    cy.contains("Неправильая почта или пароль").should("be.visible");
  });
});

describe("check add book functionality", () => {
  it("can add new book to favorite", () => {
    cy.contains("Log in").click();
    cy.login("bropet@mail.ru", "123");
    cy.contains("Add new").click();
    cy.addbook("Сто лет одиночества", "Книга об одиночестве", "Г. Маркес");
    cy.contains("Add to favorite").click();
    cy.contains("Delete from favorite").should("be.visible");
  });

  it("can add new book", () => {
    cy.contains("Log in").click();
    cy.login("bropet@mail.ru", "123");
    cy.contains("Add new").click();
    cy.addbook("Война и мир", "Книга о войне и мире", "Л. Толстой");
    cy.get(".card-title").should("contain.text", "Война и мир");
  });

  it("can read info about book", () => {
    cy.contains("Log in").click();
    cy.login("bropet@mail.ru", "123");
    cy.contains("Add new").click();
    cy.addbook("Алиса в стране чудес", "Книга о чудесах", "Л. Кэролл");
    cy.contains("Алиса в стране чудес").click();
    cy.contains("Книга о чудесах").should("be.visible");
  });
});
