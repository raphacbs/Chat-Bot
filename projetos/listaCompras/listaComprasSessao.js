const env = require("../../.env")
const Telegraf = require("telegraf")
const Extra = require('telegraf/extra') 
const Markup = require('telegraf/markup')
const bot = new Telegraf(env.token)
const session = require('telegraf/session')


const botoes = lista => Extra.markup(
    Markup.inlineKeyboard(
        lista.map(item => Markup.callbackButton(item, `delete ${item}`)),
        {columns: 3}
    )
)

bot.use(session())

bot.start(async ctx => {
    const name = ctx.update.message.from.first_name
    console.log(ctx.update.message.from)
    await ctx.reply(`Seja bem vindo, ${name}`)
    await ctx.reply('Escreva os itens que deseja adicionar na lista')
    ctx.session.lista = []
})

bot.on('text', ctx=> {
    ctx.session.lista.push(ctx.update.message.text)
    ctx.reply(`Item ${ctx.update.message.text} adicionado com sucesso!`,botoes(ctx.session.lista))
})

bot.action(/delete (.+)/, ctx =>{
    ctx.session.lista = ctx.session.lista.filter(item => item !== ctx.match[1])
    ctx.reply(`Item ${ctx.match[1]} removido com sucesso!`, botoes(ctx.session.lista))
})

bot.startPolling()