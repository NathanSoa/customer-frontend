'use client'

interface BreadcrumbProps {
  title: string
}

export default function Breadcrumb({ title }: BreadcrumbProps) {
  return (
    <div className="mb-2 flex items-center gap-1 text-2xl text-gray-800">
      <a href="/" className="text-sky-400 hover:text-sky-500">
        Início
      </a>
      <span>{`/ ${title}`}</span>
    </div>
  )
}
