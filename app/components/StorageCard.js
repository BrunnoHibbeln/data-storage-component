export default function StorageCard() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-blue px-7 py-10 text-pale-blue">
      <section className="pb-4">
        <p className="text-center text-body">
          You’ve used <strong>815 GB</strong> of your storage
        </p>
      </section>
      <section className="flex h-6 w-full items-center justify-start rounded-full bg-dark-blue/30 pl-1">
        <div className="flex h-4 w-3/4 items-center justify-end rounded-full bg-gradient-to-r from-light-pink to-dark-pink pr-1">
          <div className="h-3 w-3 rounded-full bg-white"></div>
        </div>
      </section>
      <article className="flex w-full flex-row justify-between pb-7 text-[0.813rem]">
        <strong>0 GB</strong>
        <strong>1000 GB</strong>
      </article>
      <article className="absolute -bottom-10 flex flex-row items-center justify-center gap-2 rounded-xl bg-white px-7 py-4">
        <strong className="text-5xl text-black">185</strong>
        <p className="text-body text-grayish-blue">GB LEFT</p>
      </article>
    </section>
  )
}
