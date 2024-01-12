const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

const mockChar = {
  id: 1,
  name: 'Rick',
  species: 'Human',
  gender: 'Male',
  status: 'Alive',
  origin: 'Earth (C-137)',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

const mockChar2 = {
  id: 2,
  name: 'Morty',
  species: 'Human',
  gender: 'Male',
  status: 'Alive',
  origin: 'Earth (C-137)',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
};

describe('Test de RUTAS', () => {
  it('Responde con status: 200', async () => {
    await agent.get('/rickandmorty/character/1').expect(200);
  });

  it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
    const response = await agent.get('/rickandmorty/character/1');
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('name');
    expect(response.body).toHaveProperty('species');
    expect(response.body).toHaveProperty('gender');
    expect(response.body).toHaveProperty('status');
    expect(response.body).toHaveProperty('origin');
    expect(response.body).toHaveProperty('image');
  });

  it('Si no hay un personaje responde con status: 404', async () => {
    await agent.get('/rickandmorty/character/1000').expect(404);
  });

  it('Si hay un error responde con status: 500', async () => {
    await agent.get('/rickandmorty/character/error500').expect(500);
  });
});

describe('GET /rickandmorty/login', () => {
  it('Responde con access: true', async () => {
    await agent.post('/rickandmorty/login').send({email: 'test@test.com', password: 'test123'});
    await agent.get('/rickandmorty/login?email=test@test.com&password=test123').expect({
      access: true,
    });
  });

  it('Responde con access: false', async () => {
    await agent
      .get('/rickandmorty/login?email=test2@test.com&password=test1234')
      .expect({message: 'Usuario no encontrado'});
  });
});

describe('POST /rickandmorty/fav', () => {
  it('Responde con un array de favoritos', async () => {
    await agent.post('/rickandmorty/fav').send(mockChar).expect([mockChar]);
  });
  it('Responde con un array de favoritos con un nuevo personaje', async () => {
    await agent.post('/rickandmorty/fav').send(mockChar2).expect([mockChar, mockChar2]);
  });
});

describe('DELETE /rickandmorty/fav/:id', () => {
  it('Devuelve un arreglo con los elementos previos sin modificar, cuando se trata de borrar un ID no existente', async () => {
    await agent.delete('/rickandmorty/fav/1000').expect([mockChar, mockChar2]);
  });

  it('Se elimine correctamente al personaje', async () => {
    await agent.delete('/rickandmorty/fav/2').expect([mockChar]);
  });
});
