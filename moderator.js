const Discord = require("discord.js");
const { embed } = require('discord.js'); 
const { Message } = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "GUILDS", "GUILD_MESSAGES"]})
const noNoWords = ["sex", "condum", "bad", "fuck", "rape", "shit", ".me/"];
const summon = ["Troop", "333", "Troop 333"]
client.login(process.env.BOT_TOKEN);
client.on("message", message => {
    var content = message.content;
    for (var i = 0; i < noNoWords.length; i++) {
        if (content.toLowerCase().includes(noNoWords[i])){  
            message.delete()
			.then(() => console.log(`The moderator Bot removed the word ${message.content} by ${message.author.username} from the channel ${message.channel.name}`))
			.catch(console.error)
			message.channel.send("Uh-ho! <@" + message.author + "> you said a no-no word!");
            break
        }
    }
    for (var i = 0; i < summon.length; i++) {
        if (content.includes(summon[i])){  
            message.channel.send("<@" + message.author + "> you summoned me!")
			.then(() => console.log(`The moderator Bot was summoned by ${message.author.username} from the channel ${message.channel.name}`))
			.catch(console.error);
            break
        }
    }
})