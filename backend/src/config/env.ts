import dotenv from 'dotenv';

dotenv.config();

const env = {
  PORT: process.env.PORT || 3000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/sportware',
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
  LICENSE_KEY: process.env.LICENSE_KEY || '',
};

export default env;