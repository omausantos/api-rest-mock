import { Request, Response } from "express";

class Home {
  public getHome(req: Request, res: Response) {
    return res.send("Express Typescript on Vercel");
  }
}

export const home = new Home();
