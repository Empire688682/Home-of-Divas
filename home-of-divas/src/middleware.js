import { NextResponse } from 'next/server';
 
export function middleware(req) {
  const path = req.nextUrl.pathname;
    const token = req.cookies.get("DCToken")?. value || "";
    const isAdmin = req.cookies.get("DCIsAdmin")?. value || "";
    const isPublic = path === '/signup';
    const isProfile = path === '/profile';
    const isOrder = path === '/order';
    const isverifyOrder = path === '/verify-payment';
    const isAdminPath = path === '/admin';

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
    if(!token && isAdminPath){
      return NextResponse.redirect(new URL('/signup', req.url));
    }
    if(token && isAdmin === "false" && isAdminPath){
      return NextResponse.redirect(new URL('/profile', req.url));
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
    '/verify-payment',
    '/admin',
  ]
}