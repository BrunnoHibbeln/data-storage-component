import FyloCard from './components/FyloCard'
import StorageCard from './components/StorageCard'

export default function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center">
      <section className="flex w-[85%] flex-col items-center justify-center gap-5">
        <FyloCard />
        <StorageCard />
      </section>
    </main>
  )
}
