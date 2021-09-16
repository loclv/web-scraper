import * as dotenv from 'dotenv';

import { insertedGreeting } from './mock';

dotenv.config();

console.log('🌄 Hello!');
console.log('🌄 ', insertedGreeting);

console.log('DB_USER: ', process.env.DB_USER);
