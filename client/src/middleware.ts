// // middleware.ts
// import { NextRequest, NextResponse } from 'next/server'

// export function middleware(request: NextRequest) {
//   const token = request.cookies.get('tokenkeysecret')?.value;
//   console.log(token);
  
//   const { pathname } = request.nextUrl;

//   const isPublicRoute = pathname === '/login';

//   if (!token && !isPublicRoute) {
//     return NextResponse.redirect(new URL('/login', request.url));
//   }

//   if (token && isPublicRoute) {
//     return NextResponse.redirect(new URL('/dashboard', request.url));
//   }

//   return NextResponse.next();
// }
// export const config = {
//   matcher: ['/dashboard/:path*'],
// }

import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('tokenkeysecret')?.value;

  console.log("TOKEN EN MIDDLEWARE:", token);

  // Si no hay token, redirige a /login
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Si hay token, deja pasar
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};