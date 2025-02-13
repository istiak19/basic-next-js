import dbConnect from "@/utiles/dbConnect"
import { revalidatePath } from "next/cache";

export async function POST(request) {
    const res = await request.json()
    const result = await dbConnect('user-data').insertOne(res);
    // revalidatePath('/user')
    return Response.json(result)
}
export async function GET(request) {
    const result = await dbConnect('user-data').find().toArray();
    return Response.json(result)
}