import { authMiddleware } from "@clerk/nextjs";
 
// 환경변수 무시하고 무조건 보호 안하게 하는 방법
// export default authMiddleware({
//     publicRoutes: ["/test"]
// });

export default authMiddleware({
});

export const config = {
  // Protects all routes, including api/trpc.
  // See https://clerk.com/docs/references/nextjs/auth-middleware
  // for more information about configuring your Middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};