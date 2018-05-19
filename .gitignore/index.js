const Discord = require("discord.js")
const bot1 = new Discord.Client()

var number_random = 0;

var party_launch = false;



bot1.on('ready', function(){

	console.log('conected')
})

bot1.on('message', function(message){

	if(message.content == "g.start"){

		message.reply("Partie Lancé (Le nombre ce trouve entre 0 et 5000) !")

		party_launch = true;

		number_random = Math.floor(Math.random() * (3-0) + 0)

		console.log(number_random);
	}

	if(party_launch && message.content != null){

		if(Number.isInteger(parseInt(message.content))){

			if(message.content > number_random){

				message.reply('Plus Petit !')
			}
			else if(message.content < number_random){

				message.reply('Plus Grand')
			}
			else{

				message.reply('à gagner la partie !')
				party_launch = false;
			}

		}

	}

	if(message.content == "g.stop"){

		if(party_launch == true){

		message.reply("Partie Stopé!")

		party_launch = false;

		}else{

			message.reply("Il n'y as pas de partie en cours")
		}




	}


})




bot1.login('NDQ3NDI1OTE5MzYwMTcyMDQy.DeHZcw.JG5A9hPiYbT5rFfH5mngzZIVNAE') 
