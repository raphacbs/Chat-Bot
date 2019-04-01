const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const from = ctx.update.message.from
    console.log(from)
    ctx.reply(`Seja bem vindo, ${from.first_name}!`)

})

bot.startPolling()

bot.on('text', async (ctx, next) => {
    const first_name = ctx.update.message.from.first_name
    if(first_name == 'Regina'){
        await ctx.reply('Oi o Raphael pediu pra te avisar que vc é o amor da vida dele ♥')
    }else{
        await ctx.reply('Mid 1')
    }
   
    next()
})

bot.on('text', async (ctx, next) => {
    await ctx.reply('Mid 2')
    next()
})