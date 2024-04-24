interface CheckServiceUseCase {
    execute( url: string ): Promise<boolean>;
}


export class CheckService implements CheckServiceUseCase{
    public async execute(url: string): Promise<boolean>{

        try {
            const req = await fetch( url );
            
            if ( req.ok){
                
            }
            
        } catch (error) {
            
        }
        return true;


    }
}