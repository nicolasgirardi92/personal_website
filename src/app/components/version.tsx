"use client"
import {VersionResponse} from "@/app/types/types";
import {useEffect, useState} from "react";

export default function Version(){
    const [version, setVersion] = useState<string | null>(null);

    useEffect(() => {
        fetch('/api/version')
            .then((res) => {
                if (!res.ok) throw new Error('Error fetching version');
                return res.json();
            })
            .then((data: VersionResponse) => setVersion(data.version))
            .catch((err) => console.error(err));
    }, []);

    return (
        <h1 className="text-xl font-bold">Versión {version}</h1>
    );
}