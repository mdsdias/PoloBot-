module.exports = {
    name: "guildMemberJoin",
    type: "guildMemberAdd"
};

module.exports.run = async(member, client) => {
  let user = member.user.nickname;
  member.guild.channels.get('815004744317534248').send(`Bem vindo ${user}, a mansão polar!`);
  console.log('here');
};