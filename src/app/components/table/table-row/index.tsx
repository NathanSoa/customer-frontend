import ActionSection from '@/app/components/table/action-section'

interface TableBodyProps {
  data: any[]
}

export default function TableBody({ data }: TableBodyProps) {
  return (
    <tr className="bg-white">
      {data.map((cell, index) => (
        <td className="p-tableCell" key={index}>
          {cell}
        </td>
      ))}
      <ActionSection />
    </tr>
  )
}
