export function getDataToDisplay(data: any): any[] {
  const keys = Object.keys(data)
  const dataToDisplay = keys
    .filter((key) => key !== 'id')
    .map((key) => data[key])

  return dataToDisplay
}
