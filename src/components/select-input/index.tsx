interface SelectInputProps {
  options: readonly string[]
  name: string
  id: string
}

export default function SelectInput({ options, name, id }: SelectInputProps) {
  return (
    <select
      name={name}
      id={id}
      className="h-7 w-full rounded-lg border border-gray-400 bg-white pl-2"
    >
      <option value="" className="font-sans">
        Selecione um valor
      </option>
      {options.map((option, index) => {
        return (
          <option key={index} value={option} className="font-sans">
            {option}
          </option>
        )
      })}
    </select>
  )
}
