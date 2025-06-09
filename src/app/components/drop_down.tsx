'use client';
import React from "react";
import { useState } from 'react';

export default function DropDownSection({title, children, open = false,}: {
    title: string;
    children: React.ReactNode;
    open?: boolean;
}) {
    const [isOpen, setIsOpen] = useState(open);

    return (
        <div className="border-b">
            <button
                className="w-full text-left py-3 px-4 font-semibold bg-transparent hover:font-extrabold"
                onClick={() => setIsOpen(!isOpen)}
            >
                {title}
            </button>

            {isOpen && (
                <div className="px-4 py-2 text-black bg-transparent">
                    {children}
                </div>
            )}
        </div>
    );

}