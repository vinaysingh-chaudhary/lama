import { NextResponse } from 'next/server'
 
export function middleware(NextRequest) {
    const path = NextRequest.nextUrl.pathname; 
    const accessToken = NextRequest.cookies.get("accessToken")?.value || ""
    const isPublic = path === "/auth"


    if(accessToken && isPublic) {
       return NextResponse.redirect(new URL('/', NextRequest.url))
    }        
 

    if(!accessToken && !isPublic )
        return NextResponse.redirect(new URL("/auth", NextRequest.url));
 
}
 

export const config = {
  matcher: [
    '/',
    '/auth',
    '/projects',
  ]
}