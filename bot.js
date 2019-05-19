const tmi = require('tmi.js');

// Opciones de configuracion
let opts = {
  // options: {
  //     debug: true
  // },
  connection: {
      secure: true,
      reconnect: true
  },
  identity: {
    username: process.env.BOT_USERNAME,
    password: process.env.OAUTH_TOKEN
  },
  channels: [
    process.env.CHANNEL_NAME
  ]
};

// Cliente con las opciones
let client = new tmi.client(opts);

// Manejadores del Chat
client.on('message', onMessageHandler);
client.on('subscription', onSubHandler);
client.on('resub', onResubHandler);
client.on('subgift', onSubgiftHandler);
client.on('cheer', onCheerHandler);


// Connect to Twitch:
client.connect();

// Variables
var horaUltCom1 = 0, horaUltCom2 = 0;
var ley, bebe;

function onMessageHandler (channel, context, msg, self) {
  // Ignorar mis propios mensajes...
  if (self) return;
  
  const commandName = msg.trim();
  
  // Validacion para activar los comandos
  if(context.mod || context.username === "sunny" || context.username === "ghostrss") {

    if (commandName === "!ley") {
      var horaCom1 = Date.now();
      var cooldown1 = horaCom1 - horaUltCom1;

      if(horaUltCom1 == 0 || cooldown1 >= 166000) {
        client.say(channel, "lettalHm");
        ley = setTimeout(function() {
          client.say(channel, "lettalHip YA PUEDES HABLAR SUNNY!!!");
          setTimeout(function() {
            client.say(channel, "lettalHip YA PUEDES HABLAR SUNNY!!!");
            setTimeout(function() {
              client.say(channel, "lettalHip YA PUEDES HABLAR SUNNY!!!");
            }, 1500);
          }, 1500);
        }, 166000);
        horaUltCom1 = Date.now();
      }
    }
    else if (commandName === "!bebe") {
      var horaCom2 = Date.now();
      var cooldown2 = horaCom2 - horaUltCom2;

      if(horaUltCom2 == 0 || cooldown2 >= 108000) {
        client.say(channel, "lettalHm");
        bebe = setTimeout(function() {
          client.say(channel, "lettalHip YA BB SUNNY!!!");
          setTimeout(function() {
            client.say(channel, "lettalHip YA BB SUNNY!!!");
            setTimeout(function() {
              client.say(channel, "lettalHip YA BB SUNNY!!!");
            }, 1000);
          }, 1000);
        }, 108000);
        horaUltCom2 = Date.now();
      }
    }
    else if (commandName === "!amorchat") {
      client.say(channel, "lettalHug lettalH lettalHug lettalH lettalHug");
      setTimeout(function() {
        client.say(channel, "lettalHug lettalH lettalHug lettalH lettalHug");
        setTimeout(function() {
          client.say(channel, "lettalHug lettalH lettalHug lettalH lettalHug");
          setTimeout(function() {
            client.say(channel, "lettalHug lettalH lettalHug lettalH lettalHug");
          }, 1000);
        }, 1000);
      }, 1000);
    }
    else if (commandName === "!cancelar") {
      clearTimeout(ley);
      horaUltCom1 = 0;
      
      clearTimeout(bebe);
      horaUltCom2 = 0;
    }
  }
  
  // if (commandName === '!banme') {
  //   const num = rollDice();
  //   if(num === 1) {
  //     client.say(channel, '/timeout ' + context.username + ' 5');
  //   }
  //   else if(num === 2) {
  //     client.say(channel, 'Te has salvado lettalHm');
  //   }
  // }
  if (context.username === "gustavorss" || context.username === "ghostrss") {
    if (commandName === "!piramide") {
      client.say(channel, "lettalHm ");
      client.say(channel, "lettalHm lettalHm ");
      client.say(channel, "lettalHm lettalHm lettalHm ");
      client.say(channel, "lettalHm lettalHm lettalHm lettalHm ");
      client.say(channel, "lettalHm lettalHm lettalHm lettalHm lettalHm ");
      client.say(channel, "lettalHm lettalHm lettalHm lettalHm ");
      client.say(channel, "lettalHm lettalHm lettalHm ");
      client.say(channel, "lettalHm lettalHm ");
      client.say(channel, "lettalHm ");
    }
    else if (commandName === "!uptime") {
      client.say(channel, `/w ghostrss App Online...`);
    }
  }
}

function onSubHandler (channel, username, method, message, userstate) {
  setTimeout(function() {
    client.say(channel, "lettalHype Gracias lettalHype por lettalHype tu lettalHype sub lettalHype");
    setTimeout(function() {
      client.say(channel, "lettalHype lettalHype lettalHype lettalHype lettalHype lettalHype lettalHype lettalHype lettalHype ");
        // setTimeout(function() {
        //   client.say(channel, "lettalHype lettalHype lettalHype lettalHype lettalHype");
        // }, 3000);
    }, 3500);
  }, 5500);
}

function onResubHandler (channel, username, months, message, userstate, methods) {
  setTimeout(function() {
    client.say(channel, "lettalHype Gracias lettalHype por lettalHype tu lettalHype resub lettalHype");
    setTimeout(function() {
      client.say(channel, "lettalHype lettalHype lettalHype lettalHype lettalHype lettalHype lettalHype lettalHype lettalHype ");
      // setTimeout(function() {
      //   client.say(channel, "lettalHype lettalHype lettalHype lettalHype lettalHype");
      // }, 3000);
    }, 3500);
  }, 5500);
}

function onSubgiftHandler (channel, username, streakMonths, recipient, methods, userstate) {
  setTimeout(function() {
    client.say(channel, "lettalGift Gracias lettalGift por lettalGift regalar lettalGift esa lettalGift sub lettalGift");
    setTimeout(function() {
      client.say(channel, "lettalGift lettalGift lettalGift lettalGift lettalGift lettalGift lettalGift lettalGift lettalGift ");
      // setTimeout(function() {
      //   client.say(channel, "lettalGift lettalGift lettalGift lettalGift lettalGift lettalGift lettalGift lettalGift lettalGift");
      // }, 3000);
    }, 3500);
  }, 5500);
}

function onCheerHandler (channel, userstate, message) {
  setTimeout(function() {
    if(userstate.bits > 1000) {
      client.say(channel, `WOWERS OLV WOWERS`);
    }
  }, 5000);
}

function rollDice () {
  const sides = 2;
  return Math.floor(Math.random() * sides) + 1;
}

//Manejadores del cliente
client.on('connected', function (addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
});

var keep = true;
client.on("pong", function (latency) {
  if(keep) {
    keep = false;
    setTimeout(function() {
      client.ping();
      console.log("Keep bot online...");
      keep = true;
    }, 180000);
  }
});

// client.on("ping", function () {
//   client.ping();
//   console.log("Keep bot online...");
// });

client.on("notice", (channel, msgid, message) => {
  console.log(message);
});

client.on('disconnected', function (reason){
  console.log(`Desconectado por ${reason}`);
});
