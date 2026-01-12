export const runtime = "nodejs";

import { createUser} from "@/lib/users";
import { hash } from "bcrypt"
import { NextResponse } from "next/server";


export async function POST(req) {
  const {email, password, name, phone} = await req.json()
  const hashedPassword = await hash(password,10)
  const userInfo = {email:email, password:hashedPassword, name:name, phone:phone}
  const user = await createUser(userInfo);
  return NextResponse.json({ message: "success", id: user.id });
}

