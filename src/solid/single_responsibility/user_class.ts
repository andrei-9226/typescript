interface IUser {
  id: number;
  name: string;
  username: string;
}

class UserFetch<T extends { id: number }> {
  private users: T[] = [];

  fetchAllUsers() {
    return this.users;
  }

  fetchUserById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  fetchCreateUser(user: T) {
    this.users.push(user);
  }
}

class UserManager<T extends { id: number }> {
  private users: T[] = [];
  getAllUsers() {
    this.users = new UserFetch<T>().fetchAllUsers();
    return this.users;
  }

  sortUserById() {
    return this.users.sort();
  }
}

class UserSendNotification<T> {
  sendNotificationAllUser(users: T[]) {
    users.forEach((user) => console.log(`Send notification to ${user}`));
  }

  sendNotificationToUser(user: T) {
    console.log(`Send notification to ${user}`);
  }
}

const userFetch = new UserFetch<IUser>();

const sendNotification = new UserSendNotification<IUser>();

const userManager = new UserManager<IUser>();
