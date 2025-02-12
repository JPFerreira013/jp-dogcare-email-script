function enviarEmailConfirmacao(e) {
  var resposta = e.values;  // Captura os dados do formulário

  // Mapeando os dados básicos
  var nome = resposta[1] || "Cliente";  
  var email = resposta[2];  
  var telefone = resposta[3];  
  var dataInicio = resposta[4];  
  var dataFim = resposta[5];  
  var numCachorros = parseInt(resposta[6]) || 1;  

  // Inicializando variáveis dos cachorros
  var detalhesCachorros = "";

  if (numCachorros === 1) {
    detalhesCachorros += `🐶 **${resposta[7] || "Nome não informado"}** | ${resposta[9] || "Idade não informada"} anos | Raça/Porte: ${resposta[8] || "Não informado"} | Necessidades: ${resposta[10] || "Nenhuma"}\n`;
  }
  if (numCachorros === 2) {
    detalhesCachorros += `🐶 **${resposta[12] || "Nome não informado"}** | ${resposta[14] || "Idade não informada"} anos | Raça/Porte: ${resposta[13] || "Não informado"} | Necessidades: ${resposta[15] || "Nenhuma"}\n`;
    detalhesCachorros += `🐶 **${resposta[16] || "Nome não informado"}** | ${resposta[18] || "Idade não informada"} anos | Raça/Porte: ${resposta[17] || "Não informado"} | Necessidades: ${resposta[19] || "Nenhuma"}\n`;
  }

  // Calculando o valor total a pagar
  var precoPorNoite = 24; // €24 para o primeiro cachorro
  var precoPorCachorroExtra = 12; // €12 por cachorro extra
  var dias = (new Date(dataFim) - new Date(dataInicio)) / (1000 * 60 * 60 * 24); // Calculando número de noites
  var totalPagar = (precoPorNoite + (numCachorros - 1) * precoPorCachorroExtra) * dias;

  // Criando a mensagem personalizada
  var mensagem = `Olá ${nome},\n\n`;
  mensagem += "Obrigado por sua reserva! Aqui estão os detalhes:\n\n";
  mensagem += `📅 Data de entrada: ${dataInicio}\n`;
  mensagem += `📅 Data de saída: ${dataFim}\n`;
  mensagem += `🐕 Número de cachorros: ${numCachorros}\n`;
  mensagem += `💰 Total a pagar: €${totalPagar.toFixed(2)}\n\n`;

  // Adiciona informações dos cachorros
  mensagem += "🐾 Detalhes dos cachorros:\n";
  mensagem += detalhesCachorros;

  mensagem += `\n📞 Para dúvidas, entre em contato. \n\n`;
  mensagem += "Atenciosamente,\n JPDogCare";

  // Enviar o e-mail
  MailApp.sendEmail({
    to: email,
    subject: "Confirmação da Reserva – Cuidado para Cachorros",
    body: mensagem
  });
}
