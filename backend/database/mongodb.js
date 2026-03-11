import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

const connectToDatabase = async () => {
    if(!DB_URI){
        console.error("\x1b[31m[DB] DB_URI is not set. Please define it in .env.development.local or .env.production.local\x1b[0m");
        console.error("\x1b[31m[DB] The server will run but all database operations will fail.\x1b[0m");
        return;
    }

    try {
        await mongoose.connect(DB_URI);

        console.log(`Connected to database in ${NODE_ENV} mode`);

    }
    catch (error) {
        console.error("Error connecting to database", error);
        process.exit(1);

    }

}

export default connectToDatabase;