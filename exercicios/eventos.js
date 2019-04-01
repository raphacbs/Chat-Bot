const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)

bot.start(ctx => {
    const name = ctx.update.message.from.first_name
    console.log(name)
    ctx.reply(`Seja bem vindo, ${name}!`)

})

bot.on('text', ctx => {
    ctx.reply(`O texto '${ctx.update.message.text}' foi recebido com sucesso!`)
})

bot.on('location', ctx => {
    const location = ctx.update.message.location
    console.log(location)
    ctx.reply(`Sua localizção recebida com sucesso. 
    Você está em Lat: ${location.latitude}
    Lon: ${location.longitude}`)

})

bot.on('contact', ctx => {
    const contact = ctx.update.message.contact
    console.log(contact)
    ctx.reply(`Você me enviou o contato do ${contact.first_name} com o número ${contact.phone_number}`)

})

bot.on('voice', ctx => {
    const voice = ctx.update.message.voice
    console.log(voice)
    ctx.reply(`O audio enviado possui ${voice.duration} segundos`)
})

bot.on('photo', ctx =>{
    const photo = ctx.update.message.photo
    console.log(photo)
    photo.forEach((ph, i) => {
        ctx.reply(`A foto ${i} tem resolução de ${ph.width}x${ph.height}`)
    });
})

    bot.on('sticker', ctx => {
        const sticker = ctx.update.message.sticker
        console.log(sticker)
        ctx.reply(`Sticker ${sticker.emoji} é do conjunto ${sticker.set_name}`)
    })


bot.startPolling();