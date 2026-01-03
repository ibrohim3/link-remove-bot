import { isLink } from "../utils/isLink.js";

export function antiLinkHandler(bot) {
    bot.on("message:text", async (ctx) => {
        // Faqat group va supergroup uchun
        if (!["group", "supergroup"].includes(ctx.chat.type)) return;

        const text = ctx.message.text;

        if (isLink(text)) {
            try {
                // Xabarni o‘chirish
                await ctx.deleteMessage();

                // Ogohlantirish
                await ctx.reply(
                    `⚠️ <b>Ogohlantirish!</b>\n\n` +
                    `👤 <a href="tg://user?id=${ctx.from.id}">${ctx.from.first_name}</a>, ` +
                    `guruhda link yuborish taqiqlangan.`,
                    { parse_mode: "HTML" }
                );
            } catch (err) {
                console.log("Link o'chirishda xato:", err.message);
            }
        }
    });
}
