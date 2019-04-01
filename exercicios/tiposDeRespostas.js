const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

//exemplos de reply
bot.start(async ctx =>{
    await ctx.reply(`Seja bem vindo, ${ctx.update.message.from.first_name}! 😎`)
    await ctx.replyWithHTML(`Destacando mensagem <b>HTML</b>
    <i>de várias</i> <code>String name = '${ctx.update.message.from.first_name}'</code> <pre>possíveis</pre>
    <a href="http://www.google.com.br">Google</a>`)
    await ctx.replyWithMarkdown('Destacando mensagem *Markdown*'
    +'_de várias_ `formas` ```possíveis```'
    +'[Google](http://www.google.com.br)')
    await ctx.replyWithPhoto({source: `${__dirname}/balao.png`})
    await ctx.replyWithPhoto({url: 'https://cdn.pixabay.com/photo/2017/07/07/03/14/balloon-2480283_960_720.png'})
    await ctx.replyWithLocation(29.9773008, 31.1303068)
    await ctx.replyWithVideo('http://files.cod3r.com.br/curso-bot/cod3r-end.m4v')
})

bot.startPolling()