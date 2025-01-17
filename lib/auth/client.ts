import { createAuthClient } from "better-auth/vue";
export const authClient = createAuthClient({
  baseURL: "http://localhost:3000", // the base url of your auth server
});

export const { signIn, signUp, getSession, useSession, signOut, updateUser } =
  authClient;
