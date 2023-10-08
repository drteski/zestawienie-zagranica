import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const secret = process.env.SECRET;

const middleware = async (request) => {
  const { pathname } = request.nextUrl;

  const protectedPaths = ["/", "/config", "/reports", "/country"];

  const matchesProtectedPaths = protectedPaths.some((path, index) => {
    if (index === 0) return pathname === path;
    return pathname.startsWith(path);
  });
  if (matchesProtectedPaths) {
    const token = await getToken({ req: request, secret });
    if (!token) {
      const url = new URL("/auth", request.url);
      url.searchParams.set("callbackUrl", encodeURI(request.url));
      return NextResponse.redirect(url);
    }
    return NextResponse.next();
  }
};

export { middleware };
