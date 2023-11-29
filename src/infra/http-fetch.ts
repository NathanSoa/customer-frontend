interface FetchOptions {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  body?: object
}

export const http = async <T>(options: FetchOptions): Promise<T> => {
  const { url, method, body } = options

  const headers = {
    'Content-Type': 'application/json',
  }

  const response = await fetch(url, {
    method,
    headers,
    body: JSON.stringify(body),
  })
  return await response.json()
}
