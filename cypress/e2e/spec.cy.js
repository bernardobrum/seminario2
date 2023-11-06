describe("Teste simulador de desconto", () => {
  it("Deve alertar o usuário caso ele não possua ensino médio", () => {
    cy.visit("http://localhost:3000/screen1");
    cy.get(".checkbox2").click();
    cy.wait(3000);
    cy.get(".success").click();
    cy.get(".error")
      .should("be.visible")
      .should(
        "include.text",
        "Você deve ter completado o ensino médio para se matricular!"
      );
    cy.wait(3000);
  });

  it("Deve retornar desconto igual a 20% quando tiver ensino médio, selecionar um nível de ensino, e nota < 600", () => {
    cy.visit("http://localhost:3000/screen1");
    cy.get(".checkbox1").click();
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen2");
    cy.get(".select").select("1");
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen3");
    cy.get(".input").type("599");
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen4");
    cy.get(".discount").should("be.visible").should("include.text", "20%");
    cy.wait(3000);
  });

  it("Deve retornar desconto igual a 30% quando tiver ensino médio, selecionar um nível de ensino, e nota = 600", () => {
    cy.visit("http://localhost:3000/screen1");
    cy.get(".checkbox1").click();
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen2");
    cy.get(".select").select("1");
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen3");
    cy.get(".input").type("600");
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen4");
    cy.get(".discount").should("be.visible").should("include.text", "30%");
    cy.wait(3000);
  });

  it("Deve retornar desconto igual a 30% quando tiver ensino médio, selecionar um nível de ensino, e nota > 600 e < 700", () => {
    cy.visit("http://localhost:3000/screen1");
    cy.get(".checkbox1").click();
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen2");
    cy.get(".select").select("1");
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen3");
    cy.get(".input").type("699");
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen4");
    cy.get(".discount").should("be.visible").should("include.text", "30%");
    cy.wait(3000);
  });

  it("Deve retornar desconto igual a 50% quando tiver ensino médio, selecionar um nível de ensino, e nota = 700", () => {
    cy.visit("http://localhost:3000/screen1");
    cy.get(".checkbox1").click();
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen2");
    cy.get(".select").select("1");
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen3");
    cy.get(".input").type("700");
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen4");
    cy.get(".discount").should("be.visible").should("include.text", "50%");
    cy.wait(3000);
  });

  it("Deve retornar desconto igual a 50% quando tiver ensino médio, selecionar um nível de ensino, e nota > 700", () => {
    cy.visit("http://localhost:3000/screen1");
    cy.get(".checkbox1").click();
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen2");
    cy.get(".select").select("1");
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen3");
    cy.get(".input").type("999");
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen4");
    cy.get(".discount").should("be.visible").should("include.text", "50%");
    cy.wait(3000);
  });

  it("Deve alertar o usuário caso ele não selecione um nível de ensino", () => {
    cy.visit("http://localhost:3000/screen1");
    cy.get(".checkbox1").click();
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen2");
    cy.wait(3000);
    cy.get(".success").click();
    cy.wait(3000);
    cy.get(".error")
      .should("be.visible")
      .should("include.text", "Você deve selecionar um nível de ensino!");
    cy.wait(3000);
  });

  it("Deve alertar o usuário que a nota é inválida caso ele digite uma nota menor do que 0", () => {
    cy.visit("http://localhost:3000/screen1");
    cy.get(".checkbox1").click();
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen2");
    cy.get(".select").select("1");
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen3");
    cy.get(".input").type("-1");
    cy.wait(3000);
    cy.get(".error")
      .should("be.visible")
      .should("include.text", "Nota inválida");
    cy.wait(3000);
  });

  it("Deve alertar o usuário que a nota é inválida caso ele digite uma nota maior do que 1000", () => {
    cy.visit("http://localhost:3000/screen1");
    cy.get(".checkbox1").click();
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen2");
    cy.get(".select").select("1");
    cy.wait(3000);
    cy.get(".success").click();
    cy.url().should("include", "/screen3");
    cy.get(".input").type("1001");
    cy.wait(3000);
    cy.get(".error")
      .should("be.visible")
      .should("include.text", "Nota inválida");
    cy.wait(3000);
  });
});
