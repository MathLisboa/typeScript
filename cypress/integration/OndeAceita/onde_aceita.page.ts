class OndeAceita {
  url: string;

  constructor() {
    this.url = "/onde-aceita.htm";
  }

  go() {
    cy.visit(this.url);
  }

  click_Btn_Onde_Aceita() {
    cy.get(".vr-hero__actions > .vr-button--negative").click();
  }

  validateMapComponent() {
    cy.get('[id="mapSection"]').should("be.visible");
  }
}

export default new OndeAceita();
