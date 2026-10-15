/* =============================================================
   ORTOLIGÁVEL — Configuração central
   Troque os valores entre [colchetes] pelos dados reais.
   Nada mais no site precisa ser editado à mão.
   ============================================================= */

window.ORTO = {
  dominio: "https://www.ortoligavel.com.br",

  email: "ortoligavelsantos@gmail.com",
  cro: "CRO/SP 7381",
  responsavelTecnico: "Dr. Claudio Figueiredo, CRO/SP 49.549",
  // Instagram do rodapé geral: aponta para a unidade de João Pessoa.
  instagram: "https://www.instagram.com/ortoligaveljoaopessoa/",
  horario: "Segunda: 09:00 às 18:00<br>Terça a Quinta: 09:00 às 19:00<br>Sexta: 09:00 às 17:00",

  unidades: [
    {
      id: "joao-pessoa",
      cidade: "João Pessoa",
      uf: "PB",
      regiao: "Paraíba",
      endereco: "Av. Gen. Edson Ramalho, 190, Manaíra",
      bairro: "Manaíra",
      cep: "58038-100",
      telefone: null,
      whatsapp: "5583981296657",
      instagram: "https://www.instagram.com/ortoligaveljoaopessoa/",
      mapsUrl: "https://maps.app.goo.gl/F9qsGNn9K3KWmg448",
      geo: { lat: "-7.1094678", lng: "-34.8268212" }
    }
    // Unidade Santos (matriz) mantida aqui comentada caso queiram reativar no futuro:
    // {
    //   id: "santos",
    //   cidade: "Santos",
    //   uf: "SP",
    //   regiao: "Baixada Santista",
    //   endereco: "Al. Armênio Mendes, 66 - Sl 1801, Aparecida",
    //   bairro: "Aparecida",
    //   cep: "11030-000",
    //   telefone: null,
    //   whatsapp: "5513996545599",
    //   instagram: "https://www.instagram.com/ortoligavel_santos/",
    //   mapsUrl: "https://maps.app.goo.gl/TQcSu36hFRZuCHhk9",
    //   geo: { lat: "-23.9784737", lng: "-46.3090658" }
    // }
  ],

  // Mensagem que já vem escrita quando o paciente abre o WhatsApp
  msgWhatsapp: "Olá! Vim pelo site e gostaria de agendar uma avaliação."
};
