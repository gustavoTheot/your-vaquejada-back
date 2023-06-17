cowboy.vaquejada_id -> vaquejada.manager_id -> cowboy_number

verificar quantidade e cowboy_number
reduzir -1 cowboy_number

// PHASE REPOSITORY
// atualizando fases, a senha do vaqueiro e o número da fase
async update(fase: Fase){
    const passwordCowboyJSON = JSON.stringify(fase.password_cowboy);

    await knex('phase')
        .where('id', fase.id)
        .update({ password_cowboy: passwordCowboyJSON });

    const updatedFase = await knex('phase')
        .where('id', fase.id)
        .first();

    updatedFase.password_cowboy = JSON.parse(updatedFase.password_cowboy);

    return updatedFase;
} 

// criando fase
async create(data: Fase){
        // Converte o array password_cowboy para uma string JSON
    const passwordCowboyJSON = JSON.stringify(data.password_cowboy);

    // Cria um novo objeto com o campo password_cowboy convertido
    const dataWithPasswordCowboy = { ...data, password_cowboy: passwordCowboyJSON };


    const [phaseId] = await knex("phase").insert(dataWithPasswordCowboy)
    const createdPhase = await knex("phase")
        .where("id", phaseId)
        .first();

    return createdPhase;
} 