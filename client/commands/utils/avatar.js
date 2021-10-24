const Discord = require("discord.js");

module.exports = {
    name: "avatar",
    description: "avatar",
    aliases: ["av"]
}

module.exports.run = async (message, client, res) => { 
    const embed = new Discord.MessageEmbed()
        .setTitle(`Foto de ${message.author.username}`)
        .setImage(message.author.displayAvatarURL())
    message.channel.send(embed);
}