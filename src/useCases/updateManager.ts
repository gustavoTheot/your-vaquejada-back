import { hash } from "bcrypt"
import {ManagerRepository } from "../repository/manager-repository"

interface UpdateManagerUseCaseRequest {
  id: string,
  name?: string,
  phone?: number,
  email?: string,
  password?: string
}

interface UpdateManagerUseCaseResponse {
  name?: string,
  phone?: number,
  email?: string,
  password?: string
}

export class UpdateManagerUseCase{
  constructor(private managerRepository: ManagerRepository){}

  async update({
    id,
    phone,
    name,
    email,
    password
  }: UpdateManagerUseCaseRequest): Promise<UpdateManagerUseCaseResponse>{
    const user = await this.managerRepository.findById(id)

    if (!user) {
      throw new Error('Usuário não encontrado')
    }

    if(email !== undefined){
      const emailAlreadyExist = await this.managerRepository.findByEmail(email)

      if (emailAlreadyExist?.email === email) {
        throw new Error('O e-mail informado já está cadastrado')
      }
    }

    const updatedFields: UpdateManagerUseCaseResponse = {};

    if (name !== undefined) {
      updatedFields.name = name;
    }

    if (phone !== undefined) {
      updatedFields.phone = phone;
    }

    if (email !== undefined) {
      updatedFields.email = email;
    }

    if (password !== undefined) {
      const passwordHash = await hash(password, 6);
      updatedFields.password = passwordHash;
    }

    const update = await this.managerRepository.update({
      id, ...updatedFields
    })

    return update
  }

}

