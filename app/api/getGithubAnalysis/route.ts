import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    const url = process.env.NEXT_PUBLIC_BACKEND_GITHUB_ANALYSIS_URL;
    if (!url) {
      throw new Error("NEXT_PUBLIC_BACKEND_GITHUB_ANALYSIS_URL is not defined");
    }
    const response = await axios.post(url, data);
    return NextResponse.json(response.data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
}
