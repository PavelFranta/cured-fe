import dotenv from 'dotenv';
dotenv.config();

export const isDevelopment = process.env.NODE_ENV === 'development' ? true : false;
export const productionBaseURL = 'https://cured-api.herokuapp.com';
export const devBaseURL = 'http://localhost:3000';
export const BASE_URL = isDevelopment ? devBaseURL : productionBaseURL;