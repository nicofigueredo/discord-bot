const Discord = require("discord.js");
const auth = require("../auth.json");

const client = new Discord.Client({
    token: auth.token,
    autorun: true,
});

const prefix = "duki ";

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("reconnecting", () => {
    console.log("Reconnecting!");
});

client.on("disconnect", () => {
    console.log("Disconnect!");
});

const maxDiceNumber = 6;
const minDiceNumber = 1;

client.on("message", (message) => {
    if (message.author.bot) return;

    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(`${prefix}ping`)) {
        message.reply("pong");
        message.channel.send("la concha de tu madre");
    }

    if (message.content.startsWith(`${prefix}rolldice`)) {
        message.channel.send(`Got a ${Math.round(Math.random() * maxDiceNumber + minDiceNumber)}`);
    }
});

client.login(auth.token);
