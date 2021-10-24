const Discord = require("discord.js");

module.exports = {
    name: "kick",
    description: "Kickar alguem do servidor",
    aliases: ["kick"]
}

module.exports.run = async (message, client, res) => {
    // if (!message.guild) return;
    // const user = message.mentions.users.first();
    // if (user) {
    //     const member = message.guild.member(user);
    //     // If the member is in the guild
    //     if (member) {
    //         member
    //             .kick('Rasão do kick é opcional')
    //             .then(() => {
    //                 // We let the message author know we were able to kick the person
    //                 message.reply(`Chutado daqui com sucesso: ${user.tag}`);
    //             })
    //             .catch(err => {
    //                 // An error happened
    //                 // This is generally due to the bot not being able to kick the member,
    //                 // either due to missing permissions or role hierarchy
    //                 message.reply('Não foi possível kickar ele');
    //                 // Log the error
    //                 console.error(err);
    //             });
    //     } else {
    //         // The mentioned user isn't in this guild
    //         message.reply("Não está nessa guild!");
    //     }
    //     // Otherwise, if no user was mentioned
    // } else {
    //     message.reply("Você não mensionou ninguem!");
    // }
};