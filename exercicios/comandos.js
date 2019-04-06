const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const nome = ctx.update.message.from.first_name
    ctx.reply(`Seja bem vindo, ${nome}! \nAvise de precisar de /ajuda`)
})

bot.command('ajuda', ctx => ctx.reply(''))