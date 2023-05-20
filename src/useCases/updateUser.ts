import { knex } from "../database"

interface UpdateUserUseCase {
  id: string,
  name?: string,
  email?: string,
  password?: string
}

interface UserDataToUpdate {
  name?: string,
  email?: string,
  password?: string
}

export async function updateUserUseCase({
  id,
  name,
  email,
  password
}: UpdateUserUseCase) {
  const user = await knex('manager')
    .where({ id })
    .first()

  if (!user) {
    throw new Error('Usuário não encontrado')
  }

  const dataToUpdate: UserDataToUpdate = {}

  if (name) dataToUpdate.name = name
  if (password) dataToUpdate.password = password

  // Verifica se o novo email já está cadastrado no banco de dados
  if (email && email !== user.email) {
    const emailAlreadyExists = await knex('manager')
      .where('email', email)
      .first()

    if (emailAlreadyExists) {
      throw new Error('O e-mail informado já está cadastrado')
    }

    dataToUpdate.email = email
  }

  await knex('manager')
    .where({ id })
    .update(dataToUpdate)

  return 'Usuário atualizado com sucesso'
}
