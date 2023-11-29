import { AppleLogo } from 'phosphor-react'

export default function Logo() {
  return (
    <div className="mb-5 flex items-center gap-2 p-3 text-xl">
      <AppleLogo size={48} />
      MyCompany
    </div>
  )
}
