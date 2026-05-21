import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { jwt } from "better-auth/plugins"

const client = new MongoClient(process.env.MONGO_URI);
const db = client.db('sportshub');

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
        autoSignIn: false
    },
    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
    session: {
        cookieCache: {
            enabled: true,
            strategy: "jwt",   
            maxAge: 5 * 60 * 60 * 24, // 5 days 
        }, 
    },
    plugins: [
        jwt(),
    ]
});