import dbConnect from "@/utiles/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
    const p = await params;
    const query = { _id: new ObjectId(p.id) };
    const result = await dbConnect('user-data').findOne(query);
    return Response.json(result)
}
export async function PATCH(request, { params }) {
    const res = await request.json()
    const p = await params;
    const filter = { _id: new ObjectId(p.id) };
    const options = { upsert: true };
    const updateDoc = {
        $set: {
            name: res.name
        },
    };
    const result = await dbConnect('user-data').updateOne(filter, updateDoc, options);
    return Response.json(result)
}
export async function DELETE(request, { params }) {
    const p = await params;
    const query = { _id: new ObjectId(p.id) };
    const result = await dbConnect('user-data').deleteOne(query);
    return Response.json(result)
}