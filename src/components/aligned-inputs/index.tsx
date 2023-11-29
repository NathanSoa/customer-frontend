import { ReactNode } from 'react'

function AlignedTwoInputs({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-aligned-itens-2 gap-4">{children}</div>
}

function AlignedThreeInputs({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-aligned-itens-3 gap-4">{children}</div>
}

const AlignedInputs = {
  Two: AlignedTwoInputs,
  Three: AlignedThreeInputs,
}

export default AlignedInputs
