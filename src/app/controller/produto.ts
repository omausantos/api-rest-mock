import { Request, Response } from "express";

class Produto {
  public getProduto(req: Request, res: Response) {
    return res.json({
      id: 1,
      name: "Jaleco",
      description:
        "Jaleco de alta qualidade fabricado para atender aos clientes mais exigentes",
      price: "R$ 999,99",
      available: true,
    });
  }
}

export const produto = new Produto();
