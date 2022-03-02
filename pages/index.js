import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Cygnet Call Centre - Cygnet Solutions - Hosting - Backup - Telephone
          Answering Service - Critical Call Handling
        </title>
        <meta
          name="description"
          content="Cygnet Ltd is a provider of call centre/backup and hosting solutions."
        />
        <meta
          NAME="Keywords"
          Content="telephone answering service, call centre, call center, telephone answering service"
        />
        <link rel="icon" href="/favicon.jpg" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full h-screen">
        <h1 className="text-3xl">Cygnet Call Centre</h1>
        <Image src="/favicon.jpg" alt="Vercel Logo" width={225} height={225} />
      </main>

      <footer></footer>
    </div>
  )
}
