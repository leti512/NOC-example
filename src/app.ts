//import 'dotenv/config';
import { envs } from './config/plugins/envs.plugin'
import { Server } from './presentation/server'


(async () => {
    main();
})();


function main(){
    //Server.start()
    //console.log( process.env.MAILER_SECRET_KEY );
    console.log( envs );
}