import { db } from "@/db/client";
import { NextResponse } from 'next/server'
export async function GET(request: Request) {
    const url = new URL(request.url);
    const sort = url.searchParams.get('sort');
    const filter = url.searchParams.get('filter');
    try {
        const projects = await db().from('projects').select();
        return NextResponse.json({ projects }, { status: 200 });
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 })
    }
}

