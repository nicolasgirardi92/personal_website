'use client';

import { useState, useRef, useEffect } from 'react';
import Link from "next/link";

export default function DropdownMenu() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Cierra el menú si haces clic fuera
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={menuRef}>
            <button
                onClick={() => setOpen(!open)}
                className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Menú
            </button>

            {open && (
                <div className="absolute right-0 mt-2 w-40 bg-gray-800 border rounded shadow-lg z-10">
                    <Link href="/" className="block px-4 py-2 hover:bg-blue-600">Inicio</Link>
                    <Link href="/about_me" className="block px-4 py-2 hover:bg-blue-600">Sobre mi</Link>
                    <Link href="/no_page" className="block px-4 py-2 hover:bg-blue-600">Proyectos</Link>
                    <Link href="/no_page" className="block px-4 py-2 hover:bg-blue-600">Sociales</Link>
                    <Link href="/contact" className="block px-4 py-2 hover:bg-blue-600">Contacto</Link>
                </div>
            )}
        </div>
    );
}