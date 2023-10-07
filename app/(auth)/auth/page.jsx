"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import cookieCutter from "@boiseitguru/cookie-cutter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const AuthPage = () => {
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const password = process.env.NEXT_PUBLIC_PASSWORD;
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    const cookieAuth = cookieCutter.get("authorized")
      ? JSON.parse(cookieCutter.get("authorized"))
      : false;
    setAuth(cookieAuth);
  }, []);
  if (auth) return router.push(`/${callbackUrl}`);

  const authorize = async (e) => {
    e.preventDefault();
    if (pass === password) {
      setError(false);
      cookieCutter.set("authorized", "true");
      return router.push(callbackUrl !== "" ? `/${callbackUrl}` : "/");
    }
    if (pass === "") {
      cookieCutter.set("authorized", "false");
      setError(true);
    }
    cookieCutter.set("authorized", "false");
    setError(true);
  };

  return (
    <div className="h-[100dvh] w-[100dvw] flex items-center justify-center">
      <form onSubmit={authorize}>
        <h1 className="uppercase text-center">Hasło</h1>
        {error ? (
          <p className="uppercase text-red-600 text-center">Złe hasło</p>
        ) : (
          ""
        )}
        <Input
          className="w-96 my-4"
          onChange={(e) => setPass(e.target.value)}
          type="password"
          defaultValue={pass}
          placeholder="Hasło"
        />
        <Button className="w-full">Odblokuj</Button>
      </form>
    </div>
  );
};

export default AuthPage;
