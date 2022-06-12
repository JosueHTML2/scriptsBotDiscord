//Evento messageCreate
//Autor do repositorio: Aquelemesmo
//Ajudador: JosueHTML2

module.exports = (client, message) => {
  let messageArgs = message.content.split(" "),
      { guild, channel, member, author } = message;
  
  if (author.bot) return;
  if (!messageArgs[0].startsWith(client.prefix)) return;
  
  let file = require(`../comandos/${messageArgs[0].replace(new RegExp(client.prefix, 'g'), "")}`) ?? {
    run: (c, m) => n.reply("Este comando não foi encontrado.")
  };
   
  file.run(client, message, messageArgs, member);
}
