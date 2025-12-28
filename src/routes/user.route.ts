import { Router } from "express" ;
import type { Request, Response } from "express" ;
import { db } from "../db.js";

const router = Router();

/* Post */
router.post("/", async (req: Request, res: Response) => {
  const { name, email } = req.body ;

  try {
    const [result] = await db.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [name, email]
    ) ;
    res.json({ message: "User created"}) ;
  } catch (error) {
    res.json({ message: "Error creating user", error }) ;
  }

}) ;

/* Get */
router.get("/:name", async (req, res) => {
  const { name }  = req.params ;

  try {
    const [sql]  = await db.query(
      "select * from users where name = ?", [name]
    ) ;
    res.json(sql) ;
  } catch (error) {
    res.json({ message: "Error fetching user", error }) ;
  }
}) ;

/* Get ALL */
router.get("/", async (_req,res) => {
  try {
    const [sql] = await db.query("select * from users") ;
    res.json(sql) ;
  } catch (error) {
    res.json({ message: "Error fetching users", error }) ;
  }
}) ;

/* PUT */
router.put("/:name", async(req, res) => {
  const { name }  = req.params ;
  const { email } = req.body ;
  
  try {
    const [result]  = await db.query(
      "update users set email = ? where name = ?", [email, name]
    ) ;
    res.json({message: "user di update"}) ;
  } catch (error) {
    res.json({ message: "Error fetching users", error }) ;
  }
}) ;

/* DELETE */
router.delete("/:name", async(req, res) => {
  const { name }  = req.params ;

  try {
    const[result] = await db.query(
      "delete from users where name = ?", [name]
    ) ;
    res.json({message: "user di hapus"}) ;
  } catch (error) {
    res.json({ message: "Error fetching users", error }) ;
  }
}) ;

export default router ;
