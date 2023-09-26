import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100dvh] w-[100dvw]">
      <h1 className="text-9xl mb-2 font-medium">404</h1>
      <p className="mb-12 text-primary/60">Nie znaleziono strony</p>
      <Button variant="outline" asChild>
        <Link href="/">Strona główna</Link>
      </Button>
    </div>
  );
};

export default NotFoundPage;
