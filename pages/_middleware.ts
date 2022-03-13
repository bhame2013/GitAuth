import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {

  const token = req.cookies["auth.token"] || false;
  const refreshToken = req.cookies["auth.refresh-token"] || false;
  const url = req.nextUrl.clone();

  if (!token && !refreshToken) {
   return NextResponse.rewrite("http://localhost:3030/login");
  } else if (token && refreshToken && url.pathname.includes('login')) {
    return NextResponse.redirect("http://localhost:3030/");
  }

  return NextResponse.next();
}
