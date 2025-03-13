interface IUser {
  id: number;
  name: string;
}

interface IUserRepository {
  getAllUsers: () => IUser[];
  getUserById: (id: number) => IUser | null;
}

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Peter" },
];

class UserRepository implements IUserRepository {
  private users: IUser[] = [];

  getAllUsers(): IUser[] {
    return this.users;
  }

  constructor(users: IUser[]) {
    this.users = users;
  }

  getUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user ? user : null;
  }
}

class UserService {
  private repository: IUserRepository;

  constructor(repository: IUserRepository) {
    this.repository = repository;
  }

  getUsers() {
    return this.repository.getAllUsers();
  }

  getUserById(id: number) {
    return this.repository.getUserById(id);
  }
}

const userService = new UserService(new UserRepository(users));

console.log(userService.getUsers());
console.log(userService.getUserById(2));
