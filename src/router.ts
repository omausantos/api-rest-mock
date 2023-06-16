import { Router } from "express";
import { produto } from "./app/controller/produto";
import { home } from "./app/controller/home";

const router: Router = Router();

//Routes
router.get("/produto", produto.getProduto);

router.get("/", home.getHome);

export { router };
