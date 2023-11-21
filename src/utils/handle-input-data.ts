export function handleInputData<T>(data: T, element: any) {
  if (element.localName === 'input' || element.localName === 'select') {
    if (element.type === 'checkbox') {
      handleCheckbox(data, element)
    } else {
      data[element.name as keyof T] = element.value
    }
  }
}

function handleCheckbox<T>(data: T, element: any) {
  if (!Array.isArray(data[element.name as keyof T])) {
    ;(data[element.name as keyof T] as any) = []
  }
  if (element.checked) {
    ;(data[element.name as keyof T] as any[]).push(element.value)
  }
}
