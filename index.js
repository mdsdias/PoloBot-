const Discord = require("discord.js"); 
const client = new Discord.Client();
const fs = require("fs");

const express = require("express");
const jimp = require('jimp') 
const chalk = require("chalk");
const app = express({ws:{ properties:{$browser:"Discord iOS"}}});

const now = new Date().toUTCString();
client.commands = new Discord.Collection();
require("./client/replies.js");
require('discord-buttons')(client);

process.on("uncaughtException", (e) => {
  console.log(chalk.red("-> Uncaught exception:"), e.toString());
});

process.on("unhandledRejection", (r, p) => {
  console.log(chalk.red("-> Unhandled rejection:", r.stack || r));
});

app.listen(3000, () => {
  console.log(now)
  console.log(chalk.magenta("[Express]"), "Online.")
});

app.get("/", (req, res) => {
  res.send("Ok.")
});

const folders = fs.readdirSync("./client/commands");
const events = fs.readdirSync("./client/events").filter(file => file.endsWith(".js"));


client.on('guildMemberAdd', member => {
  member.guild.channels.cache.get('815004744317534248').send(`Bem vindo ${user}, a mansão polar!`);
  console.log('here');
});

client.on("ready", async() => {
    client.user.setActivity('Prazer Polo, o Garçom | g!ajuda  >  Para comandos!')
  for (const folder of folders) {
    const commands = fs.readdirSync(`./client/commands/${folder}`).filter(file => file.endsWith(".js"))
        for (const file of commands) {
            const command = require(`./client/commands/${folder}/${file}`)
                client.commands.set(command.name, command)
        }
    }

for (const file of events) {
    const event = require(`./client/events/${file}`);
    if (event.type == "messageUpdate") {
        client.on(event.type, (m, message) => event.run(message, client));
    } else if (event.type == "ready") {
        client.on(event.type, () => event.run(client));
    } else if (event.type == "guildMemberAdd") {
        client.on(event.type, () => event.run(member, client))
    } else {
        client.on(event.type, (message) => event.run(message, client));
    }
};
});


client.login(process.env['token']).then(() => {
  console.log(chalk.magenta("[Client]"), "Online.")
});