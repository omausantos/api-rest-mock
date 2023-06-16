import { Request, Response } from "express";

class Autenticacao {
  public getToken(req: Request, res: Response) {
    return res.json({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9eyJlbWFpbCI6ImF5bGFuQGJvc2Nhcmluby5jb20iLCJwYXNzd29yZCI6InlhMGdzcWh5NHd6dnV2YjQifQ.yN_8-Mge9mFgsnYHnPEh_ZzNP7YKvSbQ3Alug9HMCsM",
    });
  }
}

export const autenticacao = new Autenticacao();
