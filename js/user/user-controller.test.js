const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

test("probar si un usuario no esta en la lista", ()=>{
  /* controlador nuevo con la lista vacia */
  const controller = new UserController();

  const user = new User(1, 'Carlos', 'Carlos@example.com');

  controller.add(user)

  /* verificar que esta en la lista el usuario y es unico */

  expect(controller.getUsers().length).toBe(1)
  expect(controller.getUsers()).toContain(user)
})



test("intentar eliminar un usuario que no existe en la lista, se espera que la lista no cambie", ()=>{
const controller2 = new UserController();
/* anadimos dos usuarios */
const userA = new User(1, 'Carlos', 'Carlos@gmail');
const userB = new User(2, 'Danlya', 'Danlya@gmail');
controller2.add(userA)
controller2.add(userB)
const userC= new User(3, 'Javier','Javer@gmail');
controller2.remove(userC);
expect(controller2.getUsers().length).toBe(2)
expect(controller2.getUsers()).toContain(userA)
expect(controller2.getUsers()).toContain(userB)
})

/* Prueba encontrar un usuario por email que si existe */
test('encontrar usuario por email',()=>{
  const controller3 = new UserController();
  const userA = new User(1, 'Carlos', 'Carlos@gmail');
  const userB = new User(2, 'Danlya', 'Danlya@gmail');
  controller3.add(userA)
  controller3.add(userB)
  const usuarioFind = controller3.findByEmail('Carlos@gmail')
   expect(usuarioFind).toBeDefined();
  expect(usuarioFind).not.toBeNull();
  expect(usuarioFind).toBe(userA)
})

/* Prueba buscar un usuario por email que no existe */

test('encontrar un usaurio por email que no existe', ()=>{
  const controller4 = new UserController();
  const userA = new User(1, 'Carlos', 'Carlos@gmail');
  const userB = new User(2, 'Danlya', 'Danlya@gmail');
  controller4.add(userA)
  controller4.add(userB)
  const resultado = controller4.findByEmail('Carlos_no_existe@gmail')
  expect(resultado).toBe(undefined)

})


test('encontrar un usuario por su ID existente', () => {
  const controller = new UserController();
  const userA = new User(1, 'Carlos', 'Carlos@gmail');
  const userB = new User(2, 'Danlya', 'Danlya@gmail');
  controller.add(userA);
  controller.add(userB);
  const foundUser = controller.findById(1);
  expect(foundUser).toBe(userA);
});

test('regresar undefined si el ID del usuario no existe', () => {
  const controller = new UserController();
  const userA = new User(1, 'Carlos', 'Carlos@gmail');
  controller.add(userA);
  const result = controller.findById(99);
  expect(result).toBeUndefined();
});