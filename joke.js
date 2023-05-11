class Joke {
    async getJoke() {
        const response = await fetch(`https://v2.jokeapi.dev/joke/Dark,Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`)
        const json = await response.json()
    
        return json
    }
    
    async sendJoke(channel) {
        try {
            const json = await this.getJoke()
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
}

module.exports = Joke
