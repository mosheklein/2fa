import redis from "@/lib/redis";
import { NextResponse } from "next/server";
import { sendOtp } from "@/utils/vonage";

export const POST = async (request) => {
    
    const phone = "+972527703292" 
    const from = "Vonage APIs" 
    const to = "972527703292"
    
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    await redis.set(`otp:${phone}`, otp, 'EX', 300) // 5 ־ תקף ל דקות
    const saved = await redis.get(`otp:${phone}`)
    const text = `Your verification code is: ${otp}`
    await sendOtp(to, from, text);
    return NextResponse.json({ success: true, otp: saved })
}