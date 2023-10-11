import axios from "axios";
import { NextRequest } from "next/server";

export async function GET() {
  try {
    const response = await axios.get("https://dummyjson.com/products");
    const data = response.data;
    console.log(Response);

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: "Failed to fetch data" });
  }
}
