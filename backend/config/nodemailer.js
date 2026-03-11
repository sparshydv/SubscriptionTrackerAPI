import nodemailer from 'nodemailer';
import { EMAIL_PASSWORD } from './env.js';
export const accountEmail = 'sparshyadav0816@gmail.com';
const normalizedEmailPassword = EMAIL_PASSWORD?.replace(/\s+/g, '');

if (!normalizedEmailPassword) {
    console.warn('EMAIL_PASSWORD is not set. Reminder emails are disabled until configured.');
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth:{
        user: accountEmail,
        pass: normalizedEmailPassword
    }

})
export default transporter;