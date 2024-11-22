const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    puppeteer: {
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', // Caminho para o navegador Chrome
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
});

client.on('ready', () => {
    console.log('Cliente conectado!');
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

// Usando apenas um listener para todas as mensagens
client.on('message_create', message => {
    if (message.from === client.info.wid.user) return;

    const msg = message.body.toLowerCase();
    console.log(`Mensagem recebida: ${msg}`); // Adicionando log para depuração


    // Respostas para diferentes condições
    if (msg === 'oi' || msg === 'olá' || msg === 'oi, tudo bem?' || msg === 'e ai' || msg === 'fala' || msg === 'ei') {
        client.sendMessage(message.from, 'Oi, tudo bem?');
    } else if (msg === 'como vc ta' || msg === 'como você está?' || msg === 'tudo sim' || msg === 'tudo bem' || msg === 'de boa' || msg === 'beleza' || msg === 'e você?' || msg === 'tudo') {
        client.sendMessage(message.from, 'Estou bem, graças a Deus');
    } else if (msg === 'preciso te fazer uma pergunta' || msg === 'tira uma duvida' || msg === 'tudo me tira uma duvida' || msg === 'tenho uma pergunta' || msg === 'tenho dúvida') {
        client.sendMessage(message.from, 'Pode falar');
    } else if (msg === 'ta de serviço' || msg === 'ta no bpm' || msg === 'ta na base' || msg === 'ta trabalhando' || msg === 'tá no serviço') {
        client.sendMessage(message.from, 'Hoje estou de folga, e essa é uma mensagem automática');
    } else if (msg === 'bom dia' || msg === 'boa tarde' || msg === 'boa noite' || msg === 'oi bom dia' || msg === 'oi boa tarde') {
        client.sendMessage(message.from, 'Olá, eu sou o assistente virtual do Dimas, e esta é uma resposta automática. Seja bem-vindo!');
        client.sendMessage(message.from, 'Sobre o que deseja falar?\n1 - Assunto pessoal\n2 - Sobre trabalho');
    } else if (msg === '1' || msg === 'pessoal' || msg === 'assunto pessoal' || msg === 'pessoal' || msg === 'assunto privado') {
        client.sendMessage(message.from, 'Ok,\nAguarde só um instante, já vou te responder');
    } else if (msg === '2' || msg === 'trabalho' || msg === 'sobre trabalho' || msg === 'seerviço' || msg === 'profissional') {
        client.sendMessage(message.from, 'Hoje estou de folga,\nPode deixar a sua mensagem que assim que possível eu respondo');
    } else {
        client.sendMessage(message.from, 'Desculpe, não entendi sua mensagem. Você pode tentar de novo?');
    }
});

client.initialize();
