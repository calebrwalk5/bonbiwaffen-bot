const Discord = require('discord.js');
const client = new Discord.Client({partials: ['MESSAGE', 'CHANNEL', 'REACTION']});
const PREFIX = "!bonkers ";
const TOKEN = "token-here";
const JELLY = "328731272497201154";

/*
Discord bot by anusO1#6969 for alex, a bonnie bonkers simp
Alex is a huge simp lmao, you will never date her
*/

client.on('ready', ready => {
  console.log("ready");
  console.log("!bonkers ban ashton");
  client.user.setActivity('bonnie bonkers', { type: 'LISTENING' });
});

client.on('message', message => {
  if (message.author.bot) return;
  if (message.content.startsWith(`${PREFIX}jelly`)) {
    message.channel.send("he is fake based");
  } else if (message.author.id === JELLY) {
	  console.log("jelly sent a message");
	  message.channel.send("fake based");
  } else if (message.content.startsWith(`${PREFIX}ban ashton`)) {
	  guild.members.ban(`${JELLY}`);
	  console.log("banned.");
  } else if (message.content.startsWith(`${PREFIX}telegram`)) {
	  message.channel.send("https://t.me/bonbiwaffen");
  } else if (message.content.startsWith(`${PREFIX}help`)) {
	  message.channel.send("Bonbiwaffen Discord Bot"\n"`!bonkers telegram`"\n"`!bonkers tiktok`"\n"`!bonkers based`"\n"`!bonkers spam`");
  } else if (message.content.startsWith(`${PREFIX}tiktok`)) {
	  message.channel.send("https://www.tiktok.com/@bonbibonkers");
  } else if (message.content.startsWith(`${PREFIX}based`)) {
	  message.channel.send("http://4chan.org/board/pol/catalog");
  } else if (message.content.startsWith(`${PREFIX}spam`)) {
	  for (int i = 0; i < 10; i++) {
	  	message.channel.send("https://bitwave.tv/codcomedytj247");
		message.channel.send("xD");
	  }
});

client.login(TOKEN);
