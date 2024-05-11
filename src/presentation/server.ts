import { envs } from "../config/plugins/envs.plugin";
import { LogSeverityLevel } from "../domain/entities/log.entity";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { MongoLogDatasource } from "../infrastructure/datasources/mongo-log.datasource";
import { PostgresLogDatasource } from "../infrastructure/datasources/postgres-log.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const logRepository = new LogRepositoryImpl(
    //new FileSystemDatasource()
    //new MongoLogDatasource(),
    new PostgresLogDatasource(),
)
const emailService = new EmailService( );
export class Server {
    public static async start(){

        console.log("start ...")

        //const logs = await logRepository.getLogs(LogSeverityLevel.low);
        //console.log(logs)

     
        //mandar email

        //new SendEmailLogs(
        //    emailService,
        //    fileSystemLogRepository
       // ).execute(
        //    ['correo@gmail.com' , 'correo@gmail.com']
       // )
        // emailService.sendEmail({
        //     to: 'correo@gmail.com',
        //     subject: 'Logs de sistema',
        //     htmlBody: `
        //     <h1>Logs de sistema -NOC /h1>
        //     <p>ddddds</p>
        //     `
        // })

        //emailService.sendEmailWithFileSystemLogs(
        //     ['correo@gmail.com' , 'correo3@gmail.com']
        // )


        console.log(envs)
        CronService.createJob(
            '*/9 * * * * *', 
            ( ) => {
                const url = 'https://www.google.com/'
                new CheckService(
                    logRepository,
                    () => console.log(`${url} is ok!`),
                    (error)=> console.log( error ),
                ).execute(url)
            }, 
        );
    }
   
}
