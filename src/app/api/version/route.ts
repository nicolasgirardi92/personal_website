import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const res = await fetch(process.env.BASE_URL + '/version');
        if (!res.ok) {
            return NextResponse.json({ error: 'Error fetching version' }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (err) {
        console.log('Error al obtener la versión:', err);
        return NextResponse.json({ error: 'Internal error' }, { status: 500 });
    }
}