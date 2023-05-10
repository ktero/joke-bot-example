require('dotenv/config')

const { Client, IntentsBitField } = require('discord.js')
const client = new Client({ 
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent
    ] 
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on('messageCreate', async (message) => {
    if (message.content === '!joke') {
        console.log(`Sending joke...`)
        sendJoke(message.channel)
    }
})

client.login(process.env.DISCORD_TOKEN)


async function sendJoke(channel) {
    try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`)
        const json = await response.json()
        const joke = json.joke

        await channel.sendTyping()

        if(typeof joke !== 'undefined') {
            channel.send(joke)
        } else {
            const setup = json.setup
            const delivery = json.delivery
            channel.send(setup)
            channel.send(`...${delivery}`)
        }
    } catch (error) {
        console.log(`Error: ${error}`)
    }
}