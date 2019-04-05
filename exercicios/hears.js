const env = require('../.env')
const Telegraf = require('telegraf')
const moment = require('moment')
const bot = new Telegraf(env.token)

bot.hears('Pizza', ctx => ctx.reply('Quero uma!!!'))

bot.hears(['Alho','Cebola'], ctx => ctx.reply('Não gosto'))

bot.hears(/Reci*/i, ctx => ctx.reply('Recife? Bela cidade'))

bot.hears(/(\d{2}\/\d{2}\/\d{4})/,ctx => {
    moment.locale('pt-BR')
    const data = moment(ctx.match[1], 'DD/MM/YYYY')    
    ctx.reply(`${ctx.match[1]} é um ${data.format('dddd')}`)
})

bot.startPolling()