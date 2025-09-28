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

