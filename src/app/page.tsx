export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <main>
                <h1 className="text-4xl font-bold mb-32">Bienvenido a mi página Web</h1>
                <h1 className="text-2xl font-bold mb-16">La idea de esta página es servir como carta de presentación.</h1>
                <h1 className="text-2xl font-bold mb-16">En esta página vas a poder encontrar tanto mi formación como
                      proyectos de índole personal.</h1>
                <h1 className="text-2xl font-bold mb-16">Se acepta cualquier tipo de comentario</h1>
          </main>
      </main>
    </div>
  );
}
