import { useReducer } from "react";
import config from "../config/config";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  Client = new Client();
  account;

  constructor() {
    this.Client.setEndpoint(config.appwriteURL).setProject(
      config.appwriteProjectID,
    );
    this.account = new Account(this.Client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name,
      );
      if (userAccount) {
        // return userAccount;
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      await this.account.createEmailSession(email, password);
    } catch (error) {
      return error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite service :: getCurrentUser :: error", error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("appwrite serice :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
