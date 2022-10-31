import onde_aceita from "integration/OndeAceita/onde_aceita.page";

describe(
  "Onde Aceita",
  { tags: "@validar_exibicao_componente_mapa_google" },
  () => {
    it("Deve ser possível verificar que o componente do mapa está sendo exibido na tela - onde aceita", () => {
      onde_aceita.go();
      onde_aceita.click_Btn_Onde_Aceita();
      onde_aceita.validateMapComponent();
    });
  }
);
