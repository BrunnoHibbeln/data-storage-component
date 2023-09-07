export default function StorageCard() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-2 rounded-xl bg-blue px-7 py-10 text-pale-blue md:w-[40rem] md:p-10">
      <section className="w-full pb-4">
        <p className="text-center text-body md:text-left">
          You’ve used <strong>815 GB</strong> of your storage
        </p>
      </section>
      <section className="flex h-6 w-full items-center justify-start rounded-full bg-dark-blue/30 pl-1">
        <div className="flex h-4 w-3/4 items-center justify-end rounded-full bg-gradient-to-r from-light-pink to-dark-pink pr-1">
          <div className="h-3 w-3 rounded-full bg-white"></div>
        </div>
      </section>
      <article className="flex w-full flex-row justify-between pb-7 text-[0.813rem] md:p-0">
        <strong>0 GB</strong>
        <strong>1000 GB</strong>
      </article>
      <article className="absolute -bottom-10 flex flex-row items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 md:bottom-[85%] md:right-14">
        <strong className="text-5xl text-black">185</strong>
        <p className="text-body text-grayish-blue">GB LEFT</p>
        <div className="relative hidden md:block">
          <div
            className="absolute -bottom-16 -right-7 h-0 w-0 border-b-[30px] border-r-[30px] border-t-[30px] border-b-transparent
border-r-white border-t-transparent"
          ></div>
        </div>
      </article>
    </section>
  )
}
