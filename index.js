const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "s!"

client.on('ready', () => {
  client.user.setGame('s!help stats/store ', 'https://open.spotify.com/user/avmlvrcz9g1awvgrcal94jsvc/playlist/4QpGQXyW3CujbPBMeAyw9l')
})   

  client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "say")) {
    message.delete()
    const embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith(prefix+ "help")) {
    const embed = new Discord.RichEmbed()
    .setTitle('BOT INFO')
    .setDescription(`•prefix --> s!
:zap:SBOT COMMANDS:zap:
:arrow_right: s!mass 
:arrow_right: s!support 
:arrow_right: s!say 
:arrow_right: s!serverinfo 
:arrow_right: s!restart 
:arrow_right: s!invite 
:arrow_right: s! 
:arrow_right: s!buy
:arrow_right: s!checkstock
:arrow_right: s!banner
:arrow_right: s!version
:arrow_right: s!bot
:arrow_right: s!site
:arrow_right: s!store`)
    .setColor('RANDOM')
   message.channel.sendEmbed(embed);
  }

});

client.on('message', message => {
    if (message.author.id == '300268467322486785') {
    if (message.content.startsWith(`s!restart`)) {
            resetBot(message.channel);
    }
  }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Restarting...')
    .then(msg => bot.destroy())
    .then(() => bot.login(process.env.TOKEN));
}

 

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if ( message.content.startsWith(prefix+ "ping")) {
    let embed = new Discord.RichEmbed()
            .setTitle('Ping')
            .setDescription(`\`\`\`md\nPing :${client.ping}ms\`\`\``)
            .setColor('RANDOM')
            .setFooter('Bot pinged')
            .setTimestamp()
        
        message.channel.send(embed);
  }
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'serverinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('Members', message.guild.memberCount, true)
  embed.addField('Name', message.guild.name, true)
  embed.addField('Region', message.guild.region, true)
  embed.addField('Owner', message.guild.owner, true)
  embed.addField('ID', message.guild.id, true)
  embed.setColor('RANDOM')
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);
  
if (message.content.startsWith(prefix + 'botinfo')) {
  const embed = new Discord.RichEmbed()
  embed.addField('BOT INFO')
  embed.addField('Name', 'SBOT', true)
  embed.addField('Prefix', 's!', true)
  embed.addField('Tag:', '6777', true)
  embed.addField('Created at:', '2018-06-13 12:52:59.660000', true)
  embed.addField('ID', '300268467322486785', true)
  embed.addField('Made with:', 'Node')
  embed.addField('Creator', '@Yonly#4995', true)
  embed.setColor('RANDOM')
  embed.setThumbnail(message.guild.iconURL)
  message.channel.sendEmbed(embed)
}
  
});

client.on('message', message =>{
  let args = message.content.split(" ").slice(1);

  if ( message.content.startsWith("https://discord.gg")) {
    message.delete()
    let embed = new Discord.RichEmbed()
            .setTitle('No Invite Link')
            .setColor('RANDOM')
            .setFooter('No invite link!')
            .setTimestamp()
        
        message.channel.send(embed);
  }

});    
   
  client.on('message', message => {    
    if(message.content.startsWith('e!mass')) {
    if(message.author.id === "300268467322486785" ||
message.author.id === "405337137735663618"){
       let args = message.content.split(" ").slice(1);         
       var argresult = args.join(" ")      
const argsresult = args.join(" ")         
       let reason = args.join(" ")                   
    if(!args[1]) {  }  
    if(args[1]) { 
message.channel.guild.members.forEach(member => {{ 
member.send(reason)
message.delete() }})}}} });

client.on('message', msg => {
    if (msg.content === 'e!invite') {
      msg.channel.send('Invite **SBOT** https://discordapp.com/api/oauth2/authorize?client_id=466269076692533262&permissions=0&scope=bot  :tada:');
    }
  });

client.on('message', msg => {
    if (msg.content === 'e!support') {
      msg.channel.send('support server ---> https://discord.gg/9SZksf9');
    }
  });

client.on('message', msg => {
    if (msg.content === 's!') {
      msg.channel.send('(s!) is my prefix !');
    }
  });

client.on('message', msg => {
    if (msg.content === 's!buy') {
      msg.channel.send('Use the s! (exemple) command to buy it! ');
    }
  });

client.on('message', msg => {
    if (msg.content === 's!buy @💸 DONATOR 💸') {
      msg.channel.send('Your request has been received!! Wait until an operator is on this server!An operator will contact you privately!');
    }
  });

client.on('message', msg => {
    if (msg.content === 's!buy @🔵 PREMIUM MEMBER 🔵') {
      msg.channel.send('Your request has been received!! Wait until an operator is on this server!An operator will contact you privately!');
    }
  });

client.on('message', msg => {
    if (msg.content === 's!buy @✔AVANSAT') {
      msg.channel.send('Your request has been received!! Wait until an operator is on this server!An operator will contact you privately!');
    }
  });

client.on('message', msg => {
    if (msg.content === 's!site') {
      msg.channel.send('Not available at the moment!');
    }
  });

client.on('message', msg => {
    if (msg.content === 's!banner') {
      msg.channel.send('https://media.giphy.com/media/4N1JosIpFJV4TXqyKW/giphy.gif');
    }
  });

client.on('message', msg => {
    if (msg.content === 's!checkstock') {
      msg.channel.send('All grades displayed on # shop?? are available!');
    }
  });

client.on('message', msg => {
    if (msg.content === 's!version') {
      msg.channel.send('SBOT V.1 scripted by yonly!');
    }
  });

client.on('message', msg => {
    if (msg.content === 's!store') {
      msg.channel.send('All grades displayed on # shop?? are available!');
    }
  });



client.login(process.env.TOKEN);
