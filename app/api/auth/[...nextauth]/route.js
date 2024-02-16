import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "cred",
      name: "Credentials",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const data = await req.body;
        return data.password === process.env.NEXT_PUBLIC_PASSWORD;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
    signOut: false,
  },
  secret: process.env.SECRET,
  session: {
    strategy: "jwt",
    maxAge: 10000,
  },
  jwt: {
    maxAge: 10000,
  },
  callbacks: {
    session({ session }) {
      return session;
    },
    jwt({ token }) {
      return token;
    },
  },

  debug: process.env.NODE_ENV === "developemnt",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
