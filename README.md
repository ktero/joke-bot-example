## A Discord Bot that tells jokes written in Javascript

sample change

This is just a fun little project that I came up randomly while I was taking a nap on a Sunday afternoon.

Note: The jokes are from JokeAPI (https://sv443.net/jokeapi/v2/). Credits to them for the jokes.

### Running the discord bot locally

Before you start, you'll need to install [NodeJS](https://nodejs.org/en/download/) and [create a Discord app](https://discord.com/developers/applications) with the proper permissions and pprivileged gateway intent:

- `bot` (with Send Messages enabled)
- PRESENCE INTENT
- SERVER MEMBERS INTENT
- MESSAGE CONTENT INTENT

Configuring the app is covered in detail in the [getting started guide](https://discord.com/developers/docs/getting-started).

#### Setup project

First clone the project:
```
git clone https://github.com/ktero/joke-bot-example.git
```

Then navigate to its directory and install dependencies:
```
cd joke-bot-example
npm install
```
#### Get discord app credentials

Fetch the credentials from your app's settings and add them to a `.env` file. You'll just need your bot token (`DISCORD_TOKEN`). In the provided .env file, you will see `DISCORD_TOKEN`, replace its placeholder value with your discord bot token.

Fetching credentials is covered in detail in the [getting started guide](https://discord.com/developers/docs/getting-started).

#### Run the discord bot

After your credentials are added, go ahead and run the app:

```
node bot.js
```