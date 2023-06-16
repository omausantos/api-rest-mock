import { Router } from "express";
import { produto } from "./app/controller/produto";
import { home } from "./app/controller/home";
import { autenticacao } from "./app/controller/autenticacao";

const router: Router = Router();

//Routes
router.get("/produto", produto.getProduto);

router.get("/", home.getHome);

router.get("/auth", autenticacao.getToken);

export { router };
