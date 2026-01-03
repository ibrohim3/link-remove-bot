// const TelegramBot = require('node-telegram-bot-api')
// function createBot(token) {
//     if (!token) {
//         throw new Error("BOT_TOKEN topilmadi")
//     }
//     return new TelegramBot(token, { polling: true })
// }
// module.exports = { createBot }
import { Bot } from "grammy";
import { startHandler } from "./src/handlers/start.handler.js";
import { antiLinkHandler } from "./src/handlers/antiLink.handler.js";

export const bot = new Bot(process.env.BOT_TOKEN);

// Handlerlarni ulash
startHandler(bot);
antiLinkHandler(bot);
