"use client";

import { Skeleton } from "@/components/ui/skeleton";
import AccountNameInput from "@/components/edit/account/AccountNameInput";
import AccountAssignCountry from "@/components/edit/account/AccountAssignCountry";
import AccountDeleteButton from "@/components/edit/account/AccountDeleteButton";
import AccountNewInput from "@/components/edit/account/AccountNewInput";

const AccountEdit = ({ data, isLoading, countries }) => {
  return (
    <div className="w-full h-[calc(100dvh_-_64px_-_88px)]">
      <h3 className="px-1 py-4 font-medium text-xl uppercase">Konta</h3>
      <div className="flex flex-col gap-2 h-[calc(100dvh_-_64px_-_88px_-_100px)] p-2 overflow-y-scroll">
        {isLoading ? (
          <>
            <Skeleton className="w-full h-full bg-foreground/5" />
            <Skeleton className="w-full h-full bg-foreground/5" />
            <Skeleton className="w-full h-full bg-foreground/5" />
            <Skeleton className="w-full h-full bg-foreground/5" />
            <Skeleton className="w-full h-full bg-foreground/5" />
            <Skeleton className="w-full h-full bg-foreground/5" />
            <Skeleton className="w-full h-full bg-foreground/5" />
          </>
        ) : data.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-foreground/50 uppercase text-2xl py-4 font-bold">
              Brak dodanych kont
            </h2>
            <p className="text-foreground/50">Dodaj konta poniżej</p>
          </div>
        ) : (
          data.map((account) => {
            return (
              <form key={account.id} className="flex gap-2">
                <div className="w-full border border-gray-200 bg-primary-foreground rounded-md p-1">
                  <AccountNameInput account={account} />
                  <div className="flex flex-col p-3 gap-2 flex-wrap">
                    <p className="text-xs">Widoczne w:</p>
                    <div className="grid grid-cols-7 items-center gap-2 flex-wrap">
                      {countries.isLoading ? (
                        <Skeleton className="w-1 h-1" />
                      ) : countries.data.length === 0 ? (
                        <p className="col-span-3 text-sm text-primary/50">
                          Dodaj kraj żeby włączyć widoczność konta.
                        </p>
                      ) : (
                        countries.data.map((country) => {
                          return (
                            <AccountAssignCountry
                              key={country.name}
                              country={country}
                              account={account}
                            />
                          );
                        })
                      )}
                    </div>
                  </div>
                </div>
                <AccountDeleteButton
                  accountId={account.id}
                  accountName={account.name}
                />
              </form>
            );
          })
        )}
      </div>
      <AccountNewInput />
    </div>
  );
};

export default AccountEdit;
