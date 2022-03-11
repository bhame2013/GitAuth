import { NextRequest, NextResponse } from "next/server";
import { getCookie } from "src/utils/cookies";

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  if (req.cookies['token']) {
    if (url.pathname) {
      return NextResponse.rewrite(`${url.origin}/`)
    }

    return NextResponse.next()
  } else {
    return NextResponse.rewrite(`${url.origin}/login`)
  }
}
