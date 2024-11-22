const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    puppeteer: {
        executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    }
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.on('message', message => {
    const msg = message.body.toLowerCase().trim();

    if (['oi', 'olá', 'ola', 'e aí', 'fala', 'opa', 'ei', 'bom dia', 'boa tarde', 'boa noite'].includes(msg)) {
        client.sendMessage(message.from, 'Oi, tudo bem?');
    } else if (['como você está?', 'como vc ta', 'tudo bem?', 'tudo bem', 'de boa?', 'de boa', 'e aí, tudo bem?', 'e vc?', 'tudo'].includes(msg)) {
        client.sendMessage(message.from, 'Estou bem, graças a Deus. E você?');
    } else if (['tira uma dúvida', 'preciso de ajuda', 'pode me ajudar?', 'preciso perguntar algo', 'tenho uma dúvida', 'me ajuda?', 'ajuda aí', 'pergunta'].includes(msg)) {
        client.sendMessage(message.from, 'Claro, pode falar sua dúvida.');
    } else if (['tá de serviço?', 'está trabalhando?', 'tá no bpm?', 'tá na base?', 'você está de plantão?', 'ta trabalhando', 'serviço'].includes(msg)) {
        client.sendMessage(message.from, 'Hoje estou de folga, mas essa é uma mensagem automática. Deixe sua mensagem, que responderei assim que possível.');
    } else if (['1', 'pessoal'].includes(msg)) {
        client.sendMessage(message.from, 'Se for urgente pode me ligar, nesse momento devo está estudando ou dormindo se ja for tarde da noite. Se não quiser ligar pode deixar sua mensagem, que responderei assim que possível. =)');
    } else if (['2', 'trabalho'].includes(msg)) {
        client.sendMessage(message.from, 'Hoje estou de folga, e no momento devo está estudando, mas pode deixar sua mensagem, que responderei assim que possível. =)');
    } else if (['bahia'].includes(msg)) {
        client.sendMessage(message.from, 'Fala Capixaba, eu sou MAN assistente virtual do Dimas, no momento devo está um pouco ocupado, mas pode deixar sua mensagem, que responderei assim que possível. =)');
    } else if (['praça'].includes(msg)) {
        client.sendMessage(message.from, 'e ai praça, o que vc manda? ');
    } else {
        client.sendMessage(message.from, 'Desculpe, não entendi sua mensagem.\n Eu sou um assitente virtual do Dimas, escolha uma das opções:\n 1 - Assunto Pessoal \n 2 - Sobre Trabalho');
    }
});


client.initialize();
