import Image from 'next/image'

import DocumentIcon from '../images/icon-document.svg'
import FolderIcon from '../images/icon-folder.svg'
import UploadIcon from '../images/icon-upload.svg'
import LogoIcon from '../images/logo.svg'

export default function FyloCard() {
  return (
    <section className="flex w-full flex-col gap-10 rounded-xl rounded-tr-[130px] bg-blue p-10 md:w-[28rem] md:p-14">
      <figure>
        <Image
          className="md:h-[48px] md:w-min"
          src={LogoIcon}
          alt="Logo Icon"
        />
      </figure>
      <section className="flex flex-row gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-dark-blue p-2 md:h-14 md:w-14">
          <Image src={DocumentIcon} alt="Document Icon" />
        </div>
        <div className="flex  h-12 w-12 items-center justify-center rounded-xl bg-dark-blue p-2 md:h-14 md:w-14">
          <Image src={FolderIcon} alt="Folder Icon" />
        </div>
        <div className="flex  h-12 w-12 items-center justify-center rounded-xl bg-dark-blue p-2 md:h-14 md:w-14">
          <Image src={UploadIcon} alt="Upload Icon" />
        </div>
      </section>
    </section>
  )
}
