import 'dotenv/config';

const {
  BOILER_DEV_DATABASE_URL,
  BOILER_DEV_DATABASE_MAX_CONNECTIONS,
  BOILER_DEV_PAPERTRAIL_PORT,
  BOILER_DEV_PAPERTRAIL_HOST,
  BOILER_DEV_TERMII_API_KEY,
  BOILER_DEV_TERMII_SENDER_ID,
  BOILER_DEV_TERMII_URL,
  BOILER_DEV_SENDGRID_APIKEY,
  BOILER_DEV_EMAIL_SENDER,
  BOILER_DEV_EMAIL_SERVICE,
  BOILER_DEV_PORT,
} = process.env;

export default {
  NODE_ENV: 'development',
  DATABASE_URL: BOILER_DEV_DATABASE_URL,
  DATABASE_MAX_CONNECTIONS: BOILER_DEV_DATABASE_MAX_CONNECTIONS,
  PAPERTRAIL_PORT: BOILER_DEV_PAPERTRAIL_PORT,
  PAPERTRAIL_HOST: BOILER_DEV_PAPERTRAIL_HOST,
  EMAIL_SENDER_SERVICE: BOILER_DEV_EMAIL_SERVICE,
  EMAIL_SENDER_KEY: BOILER_DEV_SENDGRID_APIKEY,
  EMAIL_SENDER: BOILER_DEV_EMAIL_SENDER,
  SMS_API_KEY: BOILER_DEV_TERMII_API_KEY,
  SMS_SENDER_ID: BOILER_DEV_TERMII_SENDER_ID,
  SMS_SENDER_URL: BOILER_DEV_TERMII_URL,
  PORT: BOILER_DEV_PORT,
};