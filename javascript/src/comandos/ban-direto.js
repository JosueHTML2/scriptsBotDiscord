//Command ban
//Exemplo: !ban <@user> <motivo>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Contribuidor JosueHTML

module.exports.run = (client, message) => {
   let reason = message.content.split(/ +/)[2],
   member = message.mentions.members.first(); // Pegando o membro pela menções.
   
   if (!member || !reason) 
      return message.channel.send("Você usou o comando de uma forma errada, use assim: !ban <@nomeDoUsuario> <razão> (Ignore os < e os >)") //Verificando se a mensagem tem um user ou uma razão.
   
   message.channel.send(`${member.displayName()}, Foi banido com sucesso com a razão ${reason}`); //Mandando mensagem no canal que o comando foi usado.
   member.ban({ reason }); //Banindo o membro mencionado.
}
