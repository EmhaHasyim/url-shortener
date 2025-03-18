const generateRandomString = (length: number = 6): string => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const randomValues = new Uint8Array(length);
    crypto.getRandomValues(randomValues);


    return Array.from(randomValues, (byte) =>
        chars[byte % chars.length]
    ).join('');
}

export default generateRandomString