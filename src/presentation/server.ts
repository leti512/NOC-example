import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service";


export class Server {
    public static start(){
        CronService.createJob(
            '*/2 * * * * *', 
            ( ) => {
                const url = 'ttp://localhost:4000/posts'
                new CheckService(
                    () => console.log(`${url} is ok!`),
                    (error)=> console.log( error ),
                ).execute(url)
            }, 
        );
    }
   
}