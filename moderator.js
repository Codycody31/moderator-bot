const Discord = require("discord.js");
const { embed } = require('discord.js'); 
const { Message } = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "GUILDS", "GUILD_MESSAGES"]})
const noNoWords = ["sex", "condum", "bad", "fuck", "rape", "shit", "nude"];
const scam = [".me/", "discord.gifts/billing/promotion/", "discord-airdrop.fun/nitro", "discord-niltro.com/", "https://discrde.gift/QEHnDhAbECvcW"];
const links = ["discord.gg/"];
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
    for (var i = 0; i < scam.length; i++) {
        if (content.toLowerCase().includes(scam[i])){
            if (message.member.roles.cache.some(role => role.name === 'troop leaders')){
                break
            }
            else{
                message.delete()
                .then(() => console.log(`The moderator Bot removed the message "${message.content}" by ${message.author.username} from the channel ${message.channel.name}`))
                .catch(console.error)
                message.channel.send("Uh-ho! <@" + message.author + "> you tried to send a link for discord! Due to the usage of this link for scam messages the sending of this type of link has been banned!");
                break
            }
        }
    }
    for (var i = 0; i < links.length; i++) {
        if (content.toLowerCase().includes(links[i])){
            if (message.member.roles.cache.some(role => role.name === 'troop leaders')){
                break
            }
            else{
                message.delete()
                .then(() => console.log(`The moderator Bot removed the message "${message.content}" by ${message.author.username} from the channel ${message.channel.name}`))
                .catch(console.error)
                message.channel.send("Uh-ho! <@" + message.author + "> you tried to send a link for a discord server! Only troop leaders can do that!");
                break
            }
        }
    }
})