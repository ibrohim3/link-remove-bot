import { Bot } from "grammy";
import { startHandler } from "./src/handlers/start.handler.js";
import { antiLinkHandler } from "./src/handlers/antiLink.handler.js";

export const bot = new Bot(process.env.BOT_TOKEN);
// Handlerlarni ulash
startHandler(bot);
antiLinkHandler(bot);
