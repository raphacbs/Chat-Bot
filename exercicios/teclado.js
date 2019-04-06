const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
const Markup = require('telegraf/markup')

const tecladoCarne = Markup.keyboard([
    ['Porco','Boi','Bode'],
    ['Frango','Ovo'],
    ['Peixe', 'Frutos do mar'],
    ['Sou vegetariano']

]).resize().oneTime().extra()

bot.start(async ctx =>{
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}`)
    await ctx.reply(`Qual bebida vc prefere?`, 
    Markup.keyboard([`Suco`,`Refrigerante`,`Água`]).resize().oneTime().extra())
})

bot.hears(['Suco','Água'], async ctx =>{
    await ctx.reply(`Muito bem! ${ctx.match} é saudável...`)
    await ctx.reply(`Qual sua carne preferida?`, tecladoCarne)
})

bot.hears(/Refrig*/, async ctx =>{
    await ctx.reply(`${ctx.match} não é saudável, mas ninguém é de ferro kkkk...`)
    await ctx.reply(`Qual sua carne preferida?`, tecladoCarne.resize().oneTime().extra())
})

bot.hears(/ *vegetariano*/, async ctx =>{
    await ctx.reply(`Respeito, mas prefiro carne kkkkk `)
})

bot.on('text', ctx=> ctx.reply(`Muito legal.`))


bot.startPolling()
