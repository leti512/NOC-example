interface SendLogEmailUseCase {
    execute: (to: string | string[]) => Promise<boolean>
}

export class SendEmailLogs implements SendLogEmailUseCase{
    async execute(to: string | string[]){
        return true;
    }
    
}