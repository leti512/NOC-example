import { CronService } from "./cron/cron-service";


export class Server {
    public static start(){
        CronService.createJob(
            '*/2 * * * * *', 
            ( ) => {

            }, 
        );
    }
   
}