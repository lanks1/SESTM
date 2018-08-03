const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong');
      }
});

var prefix = "!";
client.on("message", message => {

            if (message.content.startsWith(prefix + "bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});




client.on("ready", async  => {
setInterval(function(){
client.channels.find('id', '475070301940613141').setName("「.W");
client.channels.find('id', '475070301940613141').setName("「.We");
client.channels.find('id', '475070301940613141').setName("「.Wel");
client.channels.find('id', '475070301940613141').setName("「.Welc");
client.channels.find('id', '475070301940613141').setName("「.Welco");
client.channels.find('id', '475070301940613141').setName("「.Welcom");
client.channels.find('id', '475070301940613141').setName("「.Welcome");
client.channels.find('id', '475070301940613141').setName("「.Welcome T");
client.channels.find('id', '475070301940613141').setName("「.Welcome To");
client.channels.find('id', '475070301940613141').setName("「.Welcome To N");
client.channels.find('id', '475070301940613141').setName("「.Welcome To NS");
client.channels.find('id', '475070301940613141').setName("「.Welcome To NSF");
client.channels.find('id', '475070301940613141').setName("「.Welcome To NSF ");
client.channels.find('id', '475070301940613141').setName("「.Welcome To NSF .」");
  }, 3000);
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`NSF,~THE~BEST ON ${client.guilds.size} Servers`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
