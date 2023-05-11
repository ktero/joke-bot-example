require('dotenv/config')

const { Client, IntentsBitField } = require('discord.js')
const Joke = require('./joke')

const client = new Client({ 
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ] 
})

const joke = new Joke()

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', async (message) => {
    if (message.content === '!joke') {
        console.log(`Sending joke...`)
        joke.sendJoke(message.channel)
    }
})

client.login(process.env.DISCORD_TOKEN)
