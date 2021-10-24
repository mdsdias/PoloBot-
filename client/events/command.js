module.exports = {
    name: "command",
    type: "message"
}

module.exports.run = async(message, client) => {

    let prefix = "g!"

        if (message.author.bot)
            return;
        if (!message.content.startsWith(prefix))
            return;
        if (message.content.length > 200)
            return;

    let command = message.content.toLowerCase().split(" ").shift().slice(prefix.length);
    let args = message.content.toLowerCase().split(" ").slice(1);
    let res = {
        command,
        args
    };

    const used = client.commands.get(command) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(command));

    if (!used)
        return;
    used.run(message, client, res);

};
