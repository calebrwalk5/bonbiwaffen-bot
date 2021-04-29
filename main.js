const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
const Discord = require('discord.js');
const PREFIX = "!bonkers ";
const TOKEN = "token-here";
const JELLY = "328731272497201154";

client.on('ready', ready => {
  console.log("ready");
  console.log("!bonkers ban ashton to ban ashton");
  client.user.setActivity('bonbi bonkers', { type: 'LISTENING' });
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(`${PREFIX}ashton`)) {
    message.channel.send("he is gay");
  } else if (message.author.id === JELLY) {
	  console.log("jelly sent a message");
  } else if (message.content.startsWith(`${PREFIX}ban ashton`)) {
  guild.members.ban(`${JELLY}`);
  console.log("banned.");
});

client.login(TOKEN);
