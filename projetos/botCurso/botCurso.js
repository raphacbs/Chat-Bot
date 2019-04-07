const env = require("../../.env")
const Telegraf = require("telegraf")
const Extra = require('telegraf/extra') 
const Markup = require('telegraf/markup')
const axios = require('axios')
const bot = new Telegraf(env.token)

const tecladoOpcoes = Markup.keyboard([
    ['Oque são bots', 'Oque verei no curso?'],
    
])