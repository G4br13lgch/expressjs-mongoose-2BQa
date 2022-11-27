import bcrypt from 'bcrypt';
import crypto from 'crypto';


const algorithm = 'aes-256-ctr';
const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
const iv = "vOVH6N01lwHzfrSz";

export const generateHash = async (password) => {
    const hash = await bcrypt.hash(password, 10);
    return hash;
}
export const verifyHash = async (password, hash) => {
    const valid = await bcrypt.compare(password, hash);
    return valid;
}

export const encrypt_local = (text) => {
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    let encryptedData = [cipher.update(text, "utf-8", "hex"), cipher.final("hex")].join('');
    return encryptedData;
}

export const decrypt_local = (text) => {
    const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
    let decryptedData = [decipher.update(text, "hex", "utf-8"), decipher.final("utf8")].join('');
    return decryptedData;
}
