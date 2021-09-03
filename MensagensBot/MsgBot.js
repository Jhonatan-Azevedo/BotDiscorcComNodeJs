class MsgBot {
    constructor(msg) {
        this.msg = msg
    }

    //mensagem para quando solicitarem chamado
    msgSupport() {
        this.msg.reply(` Fala chefia, tudo bem por ai?
            
Para que possamos atender a sua solicitação, precisomos que registre um chamado no link abaixo:

Link: www.seulink.com`)
    }

    //mensagem para quando boas-vindas
    msgWelcome() {
        //Aqui entrara a msm de boas-vindas
    }
}
module.exports = MsgBot;