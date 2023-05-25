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
    const existingManager = await this.managerRepository.findById(id)

    if (!existingManager) {
      throw new Error('Manager not found ')
    }

    if(email && email !== existingManager.email){
      const emailAlreadyExist = await this.managerRepository.findByEmail(email)

      if (emailAlreadyExist) {
        throw new Error('O e-mail informado já está cadastrado')
      }
    }

    const updatedFields: UpdateManagerUseCaseResponse = {
      name: name || existingManager.name,
      phone: phone || existingManager.phone,
      email: email || existingManager.email,
    };

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

