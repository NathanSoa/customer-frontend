import { env } from '@/config/environment'
import { http } from '@/infra/http-fetch'
import { useEffect, useState } from 'react'

interface Flag {
  name: string
}

const getFlags = async (): Promise<Flag[]> => {
  return await http<Flag[]>({
    url: `${env.API_URL}/cardFlags`,
    method: 'GET',
  })
}

export function useCard() {
  const [flags, setFlags] = useState<Flag[]>([])

  useEffect(() => {
    getFlags().then((response) => {
      setFlags(response)
    })
  }, [])

  return { flags }
}
