import { Router } from "express";
import { produto } from "./app/controller/produto";

const router: Router = Router();

//Routes
router.get("/produto", produto.getProduto);

export { router };
