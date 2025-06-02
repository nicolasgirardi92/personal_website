import Image from "next/image";

export default function no_page() {
    return (
        <div className="page">
            <h1 className="text-4xl font-bold mb-48">Página en construcción</h1>
            <Image src='/construction.png' alt='Página en construcción' width={0}
                   height={0}
                   sizes="50vw"
                   className="w-full h-auto" />
        </div>
    )
}