import { hash } from "bcrypt"
import { randomUUID } from "crypto"
import { Manager, ManagerRepository } from "../repository/manager-repository"

interface CreateManagerUseCaseRequest{
    name: string,
    phone: number,
    cpf: string,
    email: string,
    password: string,
    cowboy_number: number,
    adm_id: string
}

interface CreateManagerUseCaseResponse{
    manager: Manager
}

export class CreateManagerUseCase{
    constructor(private managerRepository: ManagerRepository){}

    async execute({name,
        phone,
        cpf,
        email,
        password,
        cowboy_number, adm_id}: CreateManagerUseCaseRequest): Promise<CreateManagerUseCaseResponse>{

        const cpfAlreadyExists = await this.managerRepository.findByCpf(cpf)

        const emailAlreadyExists = await this.managerRepository.findByEmail(email)

        if(cpfAlreadyExists){
            throw new Error('CPF already exists')
        }
        if(emailAlreadyExists){
            throw new Error('Email already exists')
        }
            
        const passwordHash = await hash(password, 6)

        const manager = await this.managerRepository.create({
            id: randomUUID(),
            name,
            phone,
            cpf,
            email,
            password: passwordHash, 
            cowboy_number,
            adm_id
        })
        
        return {manager}

    }

}


    