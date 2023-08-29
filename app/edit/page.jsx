"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import useGetCountries from "@/hooks/useGetCountries";
import useGetAccounts from "@/hooks/useGetAccounts";
import { Skeleton } from "@/components/ui/skeleton";
import AccountAssignCountry from "@/components/edit/AccountAssignCountry";
import CountryDeleteButton from "@/components/edit/CountryDeleteButton";
import AccountDeleteButton from "@/components/edit/AccountDeleteButton";
import CountryNameInput from "@/components/edit/CountryNameInput";
import AccountNameInput from "@/components/edit/AccountNameInput";
import AccountNewInput from "@/components/edit/AccountNewInput";
import CountryNewInput from "@/components/edit/CountryNewInput";

const EditPage = () => {
  const countries = useGetCountries();
  const accounts = useGetAccounts();

  return (
    <main className="h-[100dvh] p-4">
      <div className="p-4 bg-muted h-full flex flex-col  overflow-y-scroll rounded-md">
        <div className="mb-8">
          <Button asChild>
            <Link href="/">Wróć</Link>
          </Button>
        </div>
        <div className="grid grid-cols-[1fr_2fr] my-4 gap-4">
          <div>
            <h3 className="px-1 py-4 font-medium text-xl">Kraje</h3>
            <div className="flex flex-col gap-2">
              {countries.isLoading ? (
                <Skeleton />
              ) : (
                countries.data.map((country) => {
                  return (
                    <form key={country.id} className="flex gap-2">
                      <CountryNameInput country={country} />
                      <CountryDeleteButton countryId={country.id} />
                    </form>
                  );
                })
              )}
              <CountryNewInput />
            </div>
          </div>
          <div>
            <h3 className="px-1 py-4 font-medium text-xl">Konta</h3>
            <div className="flex flex-col gap-2">
              {accounts.isLoading ? (
                <Skeleton />
              ) : (
                accounts.data.map((account) => {
                  return (
                    <form key={account.id} className="flex gap-2">
                      <div className="w-full border border-gray-200 bg-primary-foreground rounded-md p-1">
                        <AccountNameInput account={account} />
                        <div className="flex items-center p-3 gap-2 flex-wrap">
                          {!countries.isLoading &&
                            countries.data.map((country) => {
                              return (
                                <AccountAssignCountry
                                  key={country.name}
                                  country={country}
                                  account={account}
                                />
                              );
                            })}
                        </div>
                      </div>
                      <AccountDeleteButton accountId={account.id} />
                    </form>
                  );
                })
              )}
              <AccountNewInput />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditPage;
