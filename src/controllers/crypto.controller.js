import crypto from 'crypto';

const algorithm = 'aes-256-ctr';
const secretKey = "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3";
const iv = "vOVH6N01lwHzfrSz";

export const encrypt = (req,res)=>{
    const {text} = req.body;
    const cipher = crypto.createCipheriv(algorithm, secretKey, iv);
    let encryptedData = [cipher.update(text, "utf-8", "hex"), cipher.final("hex")].join('');
    res.json(encryptedData)
}

export const decrypt = (req, res) => {
    const { text } = req.body;
    const decipher = crypto.createDecipheriv(algorithm, secretKey, iv);
    let decryptedData = [decipher.update(text, "hex", "utf-8"), decipher.final("utf8")].join('');
    res.json(decryptedData)
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

export const generarCode =(bits)=>{
    return crypto.randomBytes(bits).toString("hex")
}
