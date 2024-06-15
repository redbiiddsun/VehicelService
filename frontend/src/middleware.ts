import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const sessionCookie = request.cookies.get("access_token")?.name;
  const urlPath = request.nextUrl.pathname;

  // Redirect to the homepage if the user is already signed in
  if (sessionCookie && (urlPath === "/signin" || urlPath === "/signup")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Check if the cookie exists
  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Signin and Signup pages
     */
    "/((?!api|_next/static|_next/image|favicon.ico|signin|signup).*)",
  ],
};
