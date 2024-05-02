import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { SendEmailLogs } from "../domain/use-cases/email/send-logs";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
)
const emailService = new EmailService( );
export class Server {
    public static start(){

        console.log("start ...")
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


        //console.log(envs)
        // CronService.createJob(
        //     '*/5 * * * * *', 
        //     ( ) => {
        //         const url = 'https://www.google.com/'
        //         new CheckService(
        //             fileSystemLogRepository,
        //             () => console.log(`${url} is ok!`),
        //             (error)=> console.log( error ),
        //         ).execute(url)
        //     }, 
        // );
    }
   
}
