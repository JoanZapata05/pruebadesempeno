import NextAuth, { User } from "next-auth";
import { AdapterUser } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { Session } from "next-auth";
import { NextAuthOptions } from "next-auth";

interface CredentialInput {
  username: string;
  password: string;
}

interface UserData {
  _id: string;
  email: string;
  username: string;
  name: string;
  phone: string;
  __v: number;
}

interface AuthenticatedUser extends User {
  access_token?: string;
  user: UserData; 
}

interface AuthenticatedSession extends Session {
  access_token: string;
  user: UserData;   
}

interface AuthenticatedJWT extends JWT {
  access_token: string;
  user: UserData;
}

const authOptions: NextAuthOptions = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Nombre de Usuario", type: "text", placeholder: "Usuario" },
        password: { label: "Contraseña", type: "password" },
      },
      async authorize(credentials: CredentialInput | undefined): Promise<AuthenticatedUser | null> {
        if (!credentials) return null;

        const response: Response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
          {
            method: "POST",
            body: JSON.stringify({
              username: credentials.username,
              password: credentials.password,
            }),
            headers: { "Content-Type": "application/json" },
          }
        );

        if (!response.ok) {
          return null; // Retornar null si la respuesta no es exitosa
        }

        const userData: AuthenticatedUser = await response.json();
        if (userData.access_token && userData.user) {
          return {
            id: userData.id,
            access_token: userData.access_token,
            user: userData.user
          };
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: { token: AuthenticatedJWT, user: AuthenticatedUser | AdapterUser }) {
      if (user) {
        token.accessToken = (user as AuthenticatedUser).access_token;
      }
      return token;
    },
    async session({ session, token }: { session: AuthenticatedSession, token: JWT }) {
      session.access_token = token.accessToken as string;  
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
});

export { authOptions as GET, authOptions as POST };
