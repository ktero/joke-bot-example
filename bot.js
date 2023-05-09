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
        try {
            const response = await fetch(`https://v2.jokeapi.dev/joke/Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`)
            const json = await response.json()
            const joke = json.joke

            await message.channel.sendTyping()

            if(typeof joke !== 'undefined') {
                message.channel.send(joke)
            } else {
                const setup = json.setup
                const delivery = json.delivery
                message.channel.send(setup)
                message.channel.send(`...${delivery}`)
            }
        } catch (error) {
            console.log(`Error: ${error}`)
        }
    }
})

client.login(process.env.DISCORD_TOKEN)
