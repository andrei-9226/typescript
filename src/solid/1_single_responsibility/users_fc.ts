const enum USER_URL {
  BASE = "https://jsonplaceholder.typicode.com",
  USERS = "/users",
}

interface IUser {
  id: number;
  name: string;
  username: string;
}

const errorHandler = (error: unknown, message: string) => {
  console.log(error);
  throw Error(message);
};

const getUsersFetch = async (): Promise<IUser[] | null> => {
  try {
    const response = await fetch(`${USER_URL.BASE}${USER_URL.USERS}`);
    const users: IUser[] = await response.json();
    return users;
  } catch (error) {
    errorHandler(error, "Error while fetching Posts!");
    return null;
  }
};

const logUsers = (user: IUser[]) => {
  console.log(user);
};

const filterUsers = (users: IUser[]): IUser[] => {
  return users.filter((user) => user.id > 3);
};

const fetchAndShowUsers = async () => {
  const users = await getUsersFetch();
  if (users) {
    logUsers(users);
    const filteredUsers = filterUsers(users);
    logUsers(filteredUsers);
  }
};

fetchAndShowUsers()
