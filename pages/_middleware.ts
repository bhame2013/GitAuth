import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const authCookie = JSON.parse(req.cookies["auth"] || "false");

    url.pathname = `/${authCookie ? '/' : 'login'}`

    return NextResponse.rewrite(url)
}
