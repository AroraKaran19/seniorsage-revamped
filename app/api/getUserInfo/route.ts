import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get("username");
  if (username) {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}/repos`,
        {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
          },
        }
      );
      if (response.status === 200 && response.data.length > 0) {
        return NextResponse.json(response.data);
      } else {
        const userProfile = await axios.get("https://api.github.com/users/" + username, {
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_AUTH_TOKEN}`,
          },
        });

        return NextResponse.json(
          { error: "No Repo Exist", profilePhotoUrl: userProfile.data.avatar_url },
          { status: 405 }
        );
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 404) {
        return NextResponse.json(
          { error: "Error user not found!" },
          { status: 404 }
        );
      } else {
        return NextResponse.json(
          { error: "Error while fetching data" },
          { status: 500 }
        );
      }
    }
  }
}
