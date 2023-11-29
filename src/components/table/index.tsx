import { ReactNode } from 'react'

interface TableProps {
  headers: string[]
  children: ReactNode
}

export default function Table({ headers, children }: TableProps): ReactNode {
  return (
    <div className="relative max-w-7xl overflow-x-auto rounded-xl bg-gray-100 p-2">
      <table className="mx-0 w-full text-left">
        <thead className="border-b uppercase">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="whitespace-nowrap bg-white p-tableCell"
              >
                {header}
              </th>
            ))}
            <th className="whitespace-nowrap bg-white p-tableCell">Ações</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
