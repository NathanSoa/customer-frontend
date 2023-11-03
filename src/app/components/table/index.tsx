import { ReactNode } from 'react'

interface TableProps {
  headers: string[]
  data: any[]
}

export default function Table({ headers, data }: TableProps): ReactNode {
  return (
    <div className="relative max-w-7xl overflow-x-auto rounded-xl bg-gray-100 p-2">
      <table className="mx-0 w-full text-left">
        <thead className="border-b uppercase">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="p-tableCell whitespace-nowrap bg-white"
              >
                {header}
              </th>
            ))}
            <th className="p-tableCell whitespace-nowrap bg-white">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            {data.map((cell, index) => (
              <td className="p-tableCell" key={index}>
                {cell}
              </td>
            ))}
            <td className="p-tableCell">Algumas ações</td>
          </tr>
          <tr className="bg-white">
            {data.map((cell, index) => (
              <td className="p-tableCell" key={index}>
                {cell}
              </td>
            ))}
            <td className="p-tableCell">Algumas ações</td>
          </tr>
          <tr className="bg-white">
            {data.map((cell, index) => (
              <td className="p-tableCell" key={index}>
                {cell}
              </td>
            ))}
            <td className="p-tableCell">Algumas ações</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
