const env = require('../.env')
const Telegraf = require('telegraf')
const bot = new Telegraf(env.token)
const Markup = require('telegraf/markup')