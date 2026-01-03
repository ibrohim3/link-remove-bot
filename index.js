// require("dotenv").config()
// const { createBot } = require('./src/bot');
// const handleMessage = require('./src/handlers/message');
// const handleStart = require('./src/handlers/start');

// try {
//     const bot = createBot(process.env.BOT_TOKEN);

//     // /start komandasi
//     bot.onText(/\/start/, (msg) => {
//         handleStart(bot, msg);
//     });

//     // oddiy xabarlar
//     bot.on('message', (msg) => {
//         handleMessage(bot, msg);
//     });

//     console.log('Bot ishga tushdi');
// } catch (error) {
//     console.error('Bot start error: ', error.message);
// }

import "dotenv/config";
import { bot } from "./bot.js";  // .js ni yozish ESM uchun muhim

bot.start({
    onStart: (info) => {
        console.log(`✅ Bot ishga tushdi: @${info.username}`);
    },
});
