import { envs } from "./envs.plugin";


describe('envs.plugin.ts', () => {
    test('should return env options', () => {
        //console.log(envs);
        expect(envs).toEqual(
            {
                PORT: 3000,
                MAILER_SECRET_KEY: 'aaaaaa',
                MAILER_EMAIL: 'correo@gmail.com',
                PROD: true,
                MAILER_SERVICE: 'gmail',
                MONGO_URL: 'mongodb://letizia:123456789@localhost:27012/',
                MONGO_DB_NAME: 'NOC-TEST',
                MONGO_USER: 'letizia',
                MONGO_PASS: '123456789'
              }
        );
    });

    test('should return error if not found env', async ()=> {
        jest.resetModules();
        process.env.PORT ='ABC';
        console.log(envs);
        try {
            await import('./envs.plugin');
            expect(true).toBe(false);
        } catch (error) {
            //console.log(error)
            expect(`${error}`).toContain('"PORT" should be a valid integer')
        }
    })
});