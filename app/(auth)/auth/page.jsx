"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

const AuthPage = () => {
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";

  const onSubmit = async (e) => {
    e.preventDefault();
    await signIn("cred", {
      password: pass,
      callbackUrl,
      redirect: false,
    }).then((data) => {
      if (data.ok === false) {
        setPass("");
        setError(true);
      } else {
        router.push(callbackUrl);
      }
    });
  };

  return (
    <div className="h-[100dvh] w-[100dvw] flex items-center justify-center">
      <form onSubmit={(e) => onSubmit(e)}>
        <h1 className="uppercase text-center">Hasło</h1>
        {error ? (
          <p className="uppercase text-red-600 text-center">Złe hasło</p>
        ) : (
          ""
        )}
        <Input
          className="w-96 my-4"
          onChange={(e) => {
            setError(false);
            setPass(e.target.value);
          }}
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
