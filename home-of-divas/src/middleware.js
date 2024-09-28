import { NextResponse } from 'next/server';
 
export function middleware(req) {
  const path = req.nextUrl.pathname;
    const token = req.cookies.get("DCToken")?. value || "";
    const isPublic = path === '/signup';
    const isProfile = path === '/profile';
    const isOrder = path === '/order';
    const isverifyOrder = path === '/verify-payment';

    if(token && isPublic){
      return NextResponse.redirect(new URL('/', req.url));
    }
    if(!token && isProfile){
      return NextResponse.redirect(new URL('/signup', req.url));
    }
    if(!token && isOrder){
      return NextResponse.redirect(new URL('/signup', req.url));
    }
    if(!token && isverifyOrder){
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
    '/profile',
    '/favorite',
    '/cart',
    '/order',
    '/verify-payment'
  ]
}