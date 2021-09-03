const Discord = require('discord.js')
const client = new Discord.Client()
const TOKEN = 'AquiEntraOToken'
const MsgBot = require('./MensagensBot/MsgBot');

//Event para identificar quando rodar!
client.on('ready', () => {
    console.log('Ta rodando!')
})

//Event para identificar membro novo e dar boas-vindas
client.on('guildMemberAdd', (member) => {
    let guild = client.guilds.cache.get("SeuId(Ex: 0945058)") //ID Servidor
    let channel = client.channels.cache.get("SeuId(Ex: 0945058)") //ID Canal

    channel.send(`${member} acabou de entrar no servidor`);
    member.send('Fala bichão');

});

//Event para capturar a mensagem
client.on('message', (msg) => {
    const mensagens = new MsgBot(msg);
    let content = msg.content.toLowerCase();
    if (!msg.author.bot) {
        content.indexOf('<@!826553895085015060>') != -1 ? mensagens.msgSupport() :
            content.indexOf('instalar') != -1 ? mensagens.msgSupport() :
                content.indexOf('sergio') != -1 ? mensagens.msgSupport() :
                    content.indexOf('suporte') != -1 ? mensagens.msgSupport() : console.log(`Não indetificamos sua mensagem ${msg.content}`)
    }
})
client.login(TOKEN);