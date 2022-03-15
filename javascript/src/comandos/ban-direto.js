//Command ban
//Exemplo: !ban <@user> <motivo>
//Linguagem usada: js
//Author: aquelemesmoojack#4306
//Contribuidor JosueHTML

module.exports.run = (client, message) => {
   const memberId = message.content.split(/ +/)[0] || message.mentions.members.first(); // Se tiver o id na mensagem vai ser se não vai ser a menção
   const { guild } = message;
  //Banindo
  guilds.members.cache.get(memberId).ban({
    days: 3,
    reason: message.content.split(/ +/)[1] 
  });
  
  
}
