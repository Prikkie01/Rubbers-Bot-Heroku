const Discord = require('discord.js')
const bot = new Discord.Client();

const token = 'Njk1MTk2NDA0MzA1NDk0MDg3.XoWqSA.DlZep7xuUV_uxhSL8XJE18jOW0g';

const PREFIX = '?'; 

bot.on('ready', () =>{ 
    console.log('De bot is gereed!');
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'cope':
            message.channel.send('Cope harder!');
            break;
        case 'hallo':
            message.reply('Gegroet');
            break;
            case 'clear':
            if(!args[1]) return message.reply('Bijna, voer ff een aantal in')
            message.channel.bulkDelete(args[1]);
            break; 



              
    }
})

bot.login(process.env.token);
