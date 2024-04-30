import { envs } from "../config/plugins/envs.plugin";
import { CheckService } from "../domain/use-cases/checks/check-service";
import { FileSystemDatasource } from "../infrastructure/datasources/file-system.datasource";
import { LogRepositoryImpl } from "../infrastructure/repositories/log.repository.impl";
import { CronService } from "./cron/cron-service";
import { EmailService } from "./email/email.service";

const fileSystemLogRepository = new LogRepositoryImpl(
    new FileSystemDatasource()
)

export class Server {
    public static start(){
        //mandar email
        const emailService = new EmailService(
            fileSystemLogRepository
        );

        // emailService.sendEmail({
        //     to: 'email@gmail.com',
        //     subject: 'Logs de sistema',
        //     htmlBody: `
        //     <h1>Logs de sistema -NOC /h1>
        //     <p>ddddds</p>
        //     `
        // })

        //emailService.sendEmailWithFileSystemLogs(
        //     ['email@gmail.com']
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
