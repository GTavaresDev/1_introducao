import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {/* Aula 1 -  navegação */}
        <h1>Hello world!</h1>
        <Link href="/sobre">Sobre</Link>

        {/* Aula 2 -  dados dinâmicos */}
        <h1>Acessar posts</h1>
        <Link href="/posts">Posts</Link>

        {/* Aula 3 -  parametros na url */}
        <Link href="/exemplo?param=valor">Pagina com parametro</Link>
      </main>
    </div>
  );
}
