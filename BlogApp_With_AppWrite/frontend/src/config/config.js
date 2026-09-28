const config = {
  appwriteURL: String(import.meta.env.VITE_APP_APPWRITE_URL),
  appwriteProjectID: String(import.meta.env.VITE_PROJECT_ID),
  appwriteDBID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  appwriteCollectionID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};

export default config;
