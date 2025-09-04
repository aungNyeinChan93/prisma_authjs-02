import prisma from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
    const limit = request.nextUrl.searchParams.get('limit') as string | undefined

    const categories = await prisma.category.findMany({ orderBy: { id: "desc" }, take: Number(limit) || 10 })

    return NextResponse.json({ categories }, { status: 200 })
}



export async function POST(request: NextRequest): Promise<NextResponse> {

    const body = await request.json();
    const { name, description } = body

    if (!name || !description) {
        return NextResponse.json({ message: 'Some Fields are required!' })
    }
    const category = await prisma.category.create({
        data: {
            name, description
        }
    })
    return NextResponse.json({ category }, { status: 201 })
}