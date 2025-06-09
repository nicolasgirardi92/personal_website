"use client";

import { useEffect, useState } from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <span className="font-sans font-bold text-sm ">
            {time.toLocaleTimeString([], {hour: "2-digit", minute: "2-digit",})}
        </span>

    );
}