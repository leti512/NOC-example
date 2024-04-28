import { CronJob } from 'cron';

type CronTime = string | Date;
type onTick = () => void;

export class CronService {

    static createJob( cronTime: CronTime, onTick:onTick ): CronJob{
        console.log('Server started...');
        const job = new CronJob(
            cronTime,
            onTick,
        );
        job.start();
        return job
    }

}