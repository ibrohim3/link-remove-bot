export function isLink(text = "") {
    const linkRegex = /(https?:\/\/|www\.|t\.me\/)/i;
    return linkRegex.test(text);
}
