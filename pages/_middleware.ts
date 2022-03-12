import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {

  const token = req.cookies["auth.token"] || false;
  const url = req.nextUrl.clone();

  if (!token) {
   return NextResponse.rewrite("http://localhost:3030/login");
  }

  return NextResponse.rewrite(url);
}
