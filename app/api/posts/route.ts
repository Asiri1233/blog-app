import axios from "axios";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function GET(req: Request, res: Response) {
  const post = await prisma.post.findMany();
  return new NextResponse(JSON.stringify(post));
}

export async function POST(req: Request, res: Response) {
  const body = await req.json();
  const { image, name, title, description } = body;
  const createdPost = await prisma.post.create({
    data: {
      name,
      image,
      title,
      description,
    },
  });

  return new NextResponse(JSON.stringify({ createdPost }));
}
