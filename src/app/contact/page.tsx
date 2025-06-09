"use client";

import React from 'react'
import { useState } from "react";


export default function ContactForm() {
    const [form, setForm] = useState({ from: "", subject: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if(!form.from.trim) {
            setStatus("Por favor agregue un amil de contacto, si no quiere ser contactado escriba 'sin contacto' ");
            return
        }
        if (!form.subject.trim()) {
            setStatus("Por favor agregue un asunto");
            return;
        }
        if (!form.message.trim()) {
            setStatus("Por favor agregue un mensaje");
            return;
        }
        setStatus("Enviando...");

        const res = await fetch("/api/email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            setStatus("¡Correo enviado!");
            setForm({ from: "", subject: "", message: "" });
        } else {
            setStatus("Error al enviar.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 p-4">
            <input
                type="text"
                name="from"
                placeholder="Tu E-Mail"
                value={form.from}
                onChange={handleChange}
                required
                maxLength={100}
                className="w-full p-2 border bg-amber-300 rounded-lg"
            />
            <input
                type="text"
                name="subject"
                placeholder="Asunto"
                value={form.subject}
                onChange={handleChange}
                required
                maxLength={100}
                className="w-full p-2 border bg-amber-300 rounded-lg"
            />
            <textarea
                name="message"
                placeholder="Mensaje"
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
                maxLength={500}
                className="w-full p-2 border bg-amber-300 rounded-lg"
            ></textarea>
            <p className="text-sm text-right text-shadow-black">{form.message.length}/500</p>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Enviar
            </button>
            {status && <p className="text-sm">{status}</p>}
        </form>
    );
}
