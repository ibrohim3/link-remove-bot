
import "dotenv/config";
import { bot } from "./bot.js";

bot.start({
    onStart: (info) => {
        console.log(`✅ Bot ishga tushdi: @${info.username}`);
    },
});
