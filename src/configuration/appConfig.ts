import dotenv from 'dotenv';
import { app, db } from '../interfaces/IAppConfig';

dotenv.config();

class Config {
    app!: app;
    db!: db;

    constructor() {
        switch (process.env.NODE_ENV) {
            case 'test':
                this.app = {
                    port: process.env.TEST_APP_PORT ? parseInt(process.env.TEST_APP_PORT, 10) : 8080
                };
                this.db = {
                    host: process.env.TEST_DB_HOST || 'localhost:9200'
                };
                break;
            case 'production':
                this.app = {
                    port: process.env.PROD_APP_PORT ? parseInt(process.env.PROD_APP_PORT, 10) : 8080
                };
                this.db = {
                    host: process.env.PROD_DB_HOST || 'localhost:9200'
                };
                break;
            default:
                this.app = {
                    port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
                };
                this.db = {
                    host: process.env.DEV_DB_HOST || 'localhost:9200'
                };
                break;
        }
    }
}

export const configuration = new Config();