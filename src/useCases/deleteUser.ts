import { knex } from "../database"

interface DeleteUserUseCase {
  id: string
}

export async function deleteUserUseCase({ id }: DeleteUserUseCase) {
  const user = await knex('manager')
    .where({ id })
    .first()

  if (!user) {
    throw new Error('Usuário não encontrado')
  }

  await knex('manager')
    .where({ id })
    .del()

  return 'Usuário excluído com sucesso'
}
