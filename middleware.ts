// import {  authMiddleware, clerkMiddleware } from "@clerk/nextjs/server";



// export default authMiddleware();



// export const config = {
//   matcher: ["/((?!.*\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";
const isProtectedRoute = createRouteMatcher("/");
const isPublicRoute = createRouteMatcher("/api/:path*");


export default clerkMiddleware((auth, request) =>{ 
  if(isProtectedRoute(request)){
    //if(!isPublicRoute(request)){
      auth().protect();
    //}
  }
});


export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};


// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// const isDashboardRoute = createRouteMatcher(['/dashboard(.*)']);
// const isAdminRoute = createRouteMatcher(['/admin(.*)']);

// export default clerkMiddleware((auth, req) => {
//   // Restrict admin route to users with specific role
//   if (isAdminRoute(req)) auth().protect({ role: 'org:admin' });

//   // Restrict dashboard routes to signed in users
//   if (isDashboardRoute(req)) auth().protect();
// });

// export const config = {
//   matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
// };


// import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// const isPublicRoute = createRouteMatcher(['/sign-in', '/sign-up']);

// export default clerkMiddleware((auth, request) =>{ 
//   if(!isPublicRoute(request)){
//     auth().protect();
//   }
// });

// export const config = {
//   matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// }