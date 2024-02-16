"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import useGetCountries from "@/hooks/useGetCountries";
import useGetAccounts from "@/hooks/useGetAccounts";
import CountryEdit from "@/components/edit/country/CountryEdit";
import AccountEdit from "@/components/edit/account/AccountEdit";

const EditPage = () => {
  const countries = useGetCountries();
  const accounts = useGetAccounts();

  return (
    <main className="h-[100dvh] p-4">
      <div className="p-4 bg-muted h-[calc(100dvh_-_32px)] flex flex-col rounded-md overflow-clip">
        <div className="mb-8 flex justify-between">
          <Button asChild>
            <Link href="/">Wróć</Link>
          </Button>
          <Button asChild>
            <Link href="/count">Ilość aukcji</Link>
          </Button>
        </div>
        <div className="flex justify-between my-4 gap-4">
          <CountryEdit {...countries} />
          <AccountEdit countries={countries} {...accounts} />
        </div>
      </div>
    </main>
  );
};

export default EditPage;
