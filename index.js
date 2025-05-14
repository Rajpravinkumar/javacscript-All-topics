const userMethods = {
  greet() {
    console.log(`Hi, I'm ${this.name}`);
  },
};

function createUser(name) {
  const user = Object.create(userMethods);
  user.name = name;
  return user;
}

const u1 = createUser("anbu");
u1.greet();
const u2 = createUser("anu");
u2.greet();
