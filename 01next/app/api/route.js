import { NextResponce } from "next/server";
import connectToDatabase from "@/lib/mongoos";
import Todo from "@/models/todo";


export async function GET() {
  try {
    await connectToDatabase();
    const todos = await Todo.find({}).sort({ createdAt: -1 });
    return NextResponse.json(todos);
  } catch (error) {
    console.error("Error fetching todos:", error);
    return NextResponse.json(
      { error: "Failed to fetch todos" },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await req.json();
    const { title } = body;

    if (!title) {
      return NextResponce.json({ error: "title is requierd" }, { status: 400 });
    }
    await connectToDatabase();
    const todo = new Todo({ title });
    await todo.save();
  } catch (error) {
    console.error("Error creating todo:", error);

    return NextResponse.json(
      { error: "Failed to create todo" },
      { status: 500 }
    );
  }
}
