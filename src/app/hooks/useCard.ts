import { useEffect, useState } from 'react'

interface Flag {
  id: number
  name: string
}

export function useCard() {
  const [flags, setFlags] = useState<Flag[]>([])

  useEffect(() => {
    setFlags([
      {
        id: 1,
        name: 'Visa',
      },
      {
        id: 2,
        name: 'MasterCard',
      },
      {
        id: 3,
        name: 'Elo',
      },
    ])
  }, [])

  return { flags }
}
