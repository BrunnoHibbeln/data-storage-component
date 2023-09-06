import Image from 'next/image'

import LogoIcon from '../images/logo.svg'
import DocumentIcon from '../images/icon-document.svg'
import FolderIcon from '../images/icon-folder.svg'
import UploadIcon from '../images/icon-upload.svg'

export default function FyloCard() {
  return (
    <section className="flex w-full flex-col gap-10 rounded-xl rounded-tr-[130px] bg-blue p-10">
      <section>
        <Image src={LogoIcon} alt="Logo Icon" />
      </section>
      <section className="flex flex-row gap-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-dark-blue p-2">
          <Image src={DocumentIcon} alt="Document Icon" />
        </div>
        <div className="flex  h-14 w-14 items-center justify-center rounded-lg bg-dark-blue p-3">
          <Image src={FolderIcon} alt="Folder Icon" />
        </div>
        <div className="flex  h-14 w-14 items-center justify-center rounded-lg bg-dark-blue p-3">
          <Image src={UploadIcon} alt="Upload Icon" />
        </div>
      </section>
    </section>
  )
}
