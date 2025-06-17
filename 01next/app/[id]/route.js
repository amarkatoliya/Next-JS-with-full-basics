import { NextResponce } from "next/server";
import connectToDatabase from "@/lib/mongoos";
import Todo from "@/models/todo";

export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    const todo = await Todo.findById(params.id);
    if (!todo) {
      return NextResponce.json({ error: "Todo not found" }, { status: 404 });
    }
    return NextResponce.json(todo);
  } catch (error) {
    console.error("Error fetching todo:", error);
    return NextResponce.json(
      { error: "Failed to fetch todo" },
      { status: 500 }
    );
  }
}