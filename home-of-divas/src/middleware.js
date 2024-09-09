import { NextResponse } from 'next/server'
 

export function middleware(req) {
  const path = req.nextUrl.pathname;
    const token = req.cookies.get("DCToken")?. value || "";
    const isPublic = path === '/signup';
    const isPrivate = path === '/shop';
    const isProfile = path === '/profile';

    if(token && isPublic){
      return NextResponse.redirect(new URL('/', req.url));
    }
    if(!token && isPrivate && isProfile){
      return NextResponse.redirect(new URL('/signup', req.url));
    }
}
 

export const config = {
  matcher: [
    '/',
    '/service',
    '/contact',
    '/shop',
    '/about',
    '/gallery',
    '/signup',
    '/profile'
  ]
}