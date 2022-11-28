// Require necessary discord.js classes
const fs = require('node:fs');
const path = require('node:path');
const {Client, GatewayIntentBits} = require('discord.js');
const {token} = require('./config.json');

// Create a new client instance
const client = new Client({intents: [GatewayIntentBits.Guilds] });

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    // Set a new item in the collection with the key as the command name and the value as the exported module
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    }
    else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// Login to Discord with your client's token
client.login(token);