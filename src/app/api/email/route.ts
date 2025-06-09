import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { from, subject, message } = await req.json();

    const backendURL = process.env.BASE_URL;

    if (!backendURL) {
        return NextResponse.json({ success: false, error: "Missing env vars" }, { status: 500 });
    }

    const result = await fetch(`${backendURL}/api/email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ from, subject, message }),
    });

    return NextResponse.json({ success: result.ok });
}
