require("dotenv").config();

const Discord = require("discord.js");

const client = new Discord.Client({
  intents: ["Guilds", "GuildMessages", "MessageContent"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (msg) => {
  if (msg.content.toLowerCase() === "hi bot") {
    if (msg.author.id == 582412158554603530) {
      msg.reply({
        content: "Bob youre a stinky cunt",
        tts: "true",
      });
    } else {
      msg.reply({
        content: `Hello Mr.${msg.author.username}, I hope you have a swell day`,
        tts: "true",
      });
    }
  }
});

client.login(process.env.TOKEN);
