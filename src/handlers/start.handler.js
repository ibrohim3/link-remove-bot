export function startHandler(bot) {
    bot.command("start", async (ctx) => {
        await ctx.reply(
            `👋 <b>Xush kelibsiz!</b>\n\n` +
            `🤖 Bu bot guruhingizni tartibda saqlash uchun mo'ljallangan.\n\n` +
            `🛡 <b>Imkoniyatlar:</b>\n` +
            `• Guruhlarda linklarni avtomatik o'chirish\n` +
            `• Qoidabuzarlarni ogohlantirish\n\n` +
            `➕ Botni guruhga qo'shing va admin qiling.`,
            { parse_mode: "HTML" }
        );
    });
}
