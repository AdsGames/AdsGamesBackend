import { client } from "../db";
import type { Role, User } from "../types";

export const getRoles = async (): Promise<Role[]> => {
  return client.select().table<Role>("role").orderBy("id", "asc");
};

export const getRole = async (id: string): Promise<Role | undefined> => {
  return client.select().table<Role>("role").where("id", id).first();
};

export const getUsers = async (): Promise<User[]> => {
  return client.select().table<User>("user").orderBy("id", "asc");
};

export const getUser = async (id: string): Promise<User | undefined> => {
  return client.select().table<User>("user").where("id", id).first();
};

export default {
  Query: {
    users: getUsers,
    user: async (_: unknown, { id }: { id: string }): Promise<User | undefined> => getUser(id),
    roles: getRoles,
    role: async (_: unknown, { id }: { id: string }): Promise<Role | undefined> => getRole(id),
  },
  User: {
    async role(user: User): Promise<Role | undefined> {
      return getRole(user.role_id);
    },
  },
};
