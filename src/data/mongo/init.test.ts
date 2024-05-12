import { MongoDatabase } from "./init";


describe('init MongoDB', () => {
    test('should connect to MongoDB', async() => {

      
        console.log("aquiii")
        const connected = await MongoDatabase.connect({
            dbName: process.env.MONGO_DB_NAME!,
            mongoUrl: process.env.MONGO_URL!
        })
        expect(connected).toBe(true);
    });
});