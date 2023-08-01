// create a route hndler for add student
import User from "@/lib/models/User";

import { NextRequest, NextResponse } from "next/server";
import Connect from "@/lib/Connect";
import { useRouter } from "next/navigation";

export async function POST(request) {
  const { FirstName, LastName, age, Gender, Grade, religion } =
    await request.json();
  try {
    await Connect();
    const user = await User.create({
      FirstName,
      LastName,
      age,
      Gender,
      Grade,
      religion,
    });
    return NextResponse.json({ status: "success", user });
  } catch (error) {
    return NextResponse.json({ status: "error", error });
  }
}

export async function GET(request) {
  try {
    await Connect();

    const searchParams = request.nextUrl.searchParams;
    const FirstName = searchParams.get("FirstName");

    const users = await User.findOne({ FirstName });

    return NextResponse.json({
      status: "success",
      users,
    });
  } catch (error) {
    return NextResponse.json({
      status: "error",
      error,
    });
  }
}
