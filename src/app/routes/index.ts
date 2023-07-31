import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { BookRoutes } from "../modules/book/book.route";
import { ReviewRoutes } from "../modules/review/review.route";
import { WishListRoutes } from "../modules/wishList/wishList.route";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/books",
    route: BookRoutes,
  },
  {
    path: "/books",
    route: ReviewRoutes,
  },
  {
    path: "/wishList",
    route: WishListRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
