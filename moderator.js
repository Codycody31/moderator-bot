const Discord = require("discord.js");
const { embed } = require('discord.js'); 
const { Message } = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "GUILDS", "GUILD_MESSAGES"]})
const noNoWords = ["sex", "condum", "bad", "fuck", "rape", "shit", "FU", ".me/"];
client.login(process.env.BOT_TOKEN);
client.on("message", message => {
    var content = message.content;
    for (var i = 0; i < noNoWords.length; i++) {
        if (content.includes(noNoWords[i])){  
            message.delete()
			.then(() => console.log(`FSHS Bot removed the word ${message.content} by ${message.author.username} from the channel ${message.channel.name}`))
			.catch(console.error);
            break
        }
    }
})