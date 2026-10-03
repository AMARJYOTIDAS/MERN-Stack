import config from "../../../Backend/config/config";

import { Client, ID, Database, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  database;
  bucket;
  constructer() {
    this.client
      .setEndpoint(config.appwriteURL)
      .setProject(config.appwriteProjectID);
    this.database = new Database(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.database.createDocument(
        config.appwriteDBID,
        config.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error, error");
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.database.updateDocument(
        config.appwriteDBID,
        config.appwriteCollectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        },
      );
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      await this.database.deleteDocument(
        config.appwriteDBID,
        config.appwriteCollectionID,
        slug,
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: createPost :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.database.Getdocument(
        config.appwriteDBID,
        config.appwriteCollectionID,
        slug,
      );
    } catch (error) {
      console.log("Appwrite service :: getPost :: error", error);
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.database.listDocuments(
        config.appwriteDBID,
        config.appwriteCollectionID,
        queries,
      );
    } catch (error) {
      console.log("Appwrite service :: getPosts :: error", error);
      return false;
    }
  }

  //upload file
  async uploadFile(file) {
    try {
      return await this.bucket.createFile(
        config.appwriteBucketId,
        ID.unique(),
        file,
      );
    } catch (error) {
      console.log("Appwrite service :: uploadFile :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("Appwrite service :: deleteFile :: error", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    return this.bucket.getFilePreview(config.appwriteBucketId, fileId);
  }
}
