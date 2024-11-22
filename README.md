# WhatsApp Chatbot - Assistente Virtual

Este é um **Chatbot** simples para o WhatsApp utilizando a biblioteca [whatsapp-web.js](https://github.com/mukulhase/WebWhatsapp-Wrapper). O bot é capaz de responder automaticamente a mensagens no WhatsApp com base em frases e palavras-chave. Ideal para automatizar respostas em conversas de WhatsApp, como uma maneira de realizar atendimento automatizado ou responder perguntas frequentes.

## Funcionalidades

- Respostas automáticas baseadas em palavras-chave e frases comuns como "Oi", "Como você está?", "Preciso de ajuda", etc.
- Mensagens automáticas de boas-vindas para novos contatos.
- Respostas contextuais, como informações pessoais e sobre o trabalho.
- Respostas com base em comandos informais e abreviações.

## Ferramentas Utilizadas

- [**whatsapp-web.js**](https://github.com/mukulhase/WebWhatsapp-Wrapper): Biblioteca para controle do WhatsApp Web através de código.
- [**Puppeteer**](https://github.com/puppeteer/puppeteer): Ferramenta que controla o navegador Chrome para executar o WhatsApp Web de maneira headless.
- **Node.js**: Ambiente de execução de JavaScript no lado do servidor.
- **npm**: Gerenciador de pacotes para Node.js, usado para instalar dependências.

## Dependências

- [whatsapp-web.js](https://www.npmjs.com/package/whatsapp-web.js): Biblioteca principal para interação com o WhatsApp Web.
- [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal): Geração de QR Code no terminal.
- [puppeteer-core](https://www.npmjs.com/package/puppeteer-core): Biblioteca que permite rodar o navegador Chrome em modo headless.

## Como Configurar o Projeto

### 1. Clonando o Repositório

Primeiro, clone o repositório para sua máquina local:

```bash
git clone https://github.com/seu_usuario/chatbot-whatsapp.git
cd chatbot-whatsapp 

### 2. Instalando as Dependências

Dentro do diretório do projeto, execute o comando abaixo para instalar as dependências:

```bash
npm install


### 3. Configurando o Puppeteer

O **Puppeteer** requer o Google Chrome ou o Chromium para funcionar corretamente, e se você estiver utilizando um ambiente de servidor remoto ou VPS, será necessário instalar algumas dependências para garantir que o navegador headless funcione sem problemas.

### Instalar Dependências no Linux

Para garantir que o Puppeteer tenha todas as dependências necessárias, instale os pacotes requeridos com o seguinte comando:

```bash
sudo apt-get install -y wget curl gnupg libxss1 libappindicator3-1 libindicator7 fonts-liberation


## Instalando o Google Chrome ou Chromium
Se o Google Chrome não for instalado automaticamente, você pode instalar o Chromium, que é uma versão open-source do Chrome. Use o comando abaixo para instalar o Chromium no Ubuntu:

```bash
sudo apt-get install -y chromium-browser

Isso permitirá que o Puppeteer use o navegador headless para executar o bot corretamente.

Após essas instalações, o seu ambiente estará pronto para executar o whatsapp-web.js com o Puppeteer.


### Executando a aplicação

Para rodar a aplicação, use o comando:

```Bash
node main.js