import { AppleLogo } from 'phosphor-react'

export default function Logo() {
  return (
    <div className="flex items-center gap-2 text-xl mb-5 p-3">
      <AppleLogo size={48} />
      MyCompany
    </div>
  )
}
