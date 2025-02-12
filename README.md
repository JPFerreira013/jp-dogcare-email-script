# JPDogCare Email Confirmation Script

Este repositório contém um **Google Apps Script** desenvolvido para automatizar o envio de e-mails de confirmação de reserva para hospedagem de cachorros. O script é acionado a partir de um formulário do Google Forms e realiza as seguintes funções:

- **Coleta de dados:** Lê informações do formulário, como nome do cliente, e-mail, telefone, datas de hospedagem e detalhes dos cachorros.
- **Cálculo do preço:** Calcula automaticamente o total a pagar com base na quantidade de cachorros e no número de noites (considerando que o primeiro cachorro custa €24 por noite e cada cachorro adicional custa €12 por noite).
- **Envio do e-mail:** Envia um e-mail de confirmação com os detalhes da reserva, utilizando texto puro (sem formatação Markdown).

## Funcionalidades

- **Flexibilidade:** Suporte para reservas de 1 ou 2 cachorros.
- **Automação:** O e-mail é enviado automaticamente assim que o formulário é enviado.
- **Personalização:** Mensagem configurável para incluir informações dos cachorros e dados do cliente.

## Estrutura do Código

O código principal está no arquivo `email_confirmation.gs` e realiza as seguintes etapas:

1. **Leitura dos dados do formulário:** Utiliza o objeto `e.values` para mapear os dados da planilha.
2. **Formatação da mensagem:** Organiza os dados do cliente e dos cachorros em uma mensagem de texto.
3. **Cálculo do valor total:** Com base no número de noites e quantidade de cachorros.
4. **Envio do e-mail:** Usa `MailApp.sendEmail()` para enviar a confirmação.

## Como Configurar

1. **Criar o Formulário e a Planilha:**
   - Configure seu Google Forms para coletar os dados e faça a ligação com uma planilha do Google Sheets.
   
2. **Adicionar o Script:**
   - No Google Sheets, acesse **Extensões > Apps Script** e cole o código do arquivo `email_confirmation.gs`.

3. **Configurar os Triggers:**
   - No editor do Apps Script, configure um trigger para que a função `enviarEmailConfirmacao` seja executada “ao enviar um formulário” (On form submit).

4. **Testar:**
   - Preencha o formulário com dados de teste e verifique se o e-mail de confirmação está sendo enviado corretamente.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

## Contato

Se tiver dúvidas ou sugestões, entre em contato através do [seu e-mail ou link para issues no GitHub].

---

Este README serve como documentação inicial para o seu projeto, ajudando quem acessar seu repositório a entender o propósito e o funcionamento do código.

---

Com esses passos e o README, você já terá um bom ponto de partida para construir seu portfólio no GitHub! Se precisar de mais alguma coisa ou tiver dúvidas, estou à disposição.
