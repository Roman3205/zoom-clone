export const generateRandomID = (len:number) => {
    let result = ''
    if (result) return result
    const chars = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM', max_pos = chars.length
    for (let i = 0; i<len;i++) {
        result += chars.charAt(Math.floor(Math.random() * max_pos))
    }

    return result
}