export const generatePageNumbers = (
  currentPage: number,
  totalPages: number,
) => {
  let pagesDisplay: Array<number | string> = []
  const startPage = Math.max(2, currentPage - 2)
  const endPage = Math.min(totalPages - 1, currentPage + 2)

  if (totalPages <= 7) {
    pagesDisplay = Array.from({ length: totalPages }, (_, k) => k + 1)
  } else {
    pagesDisplay = [1]
    if (startPage > 2) {
      pagesDisplay.push('...')
    }

    for (let i = startPage; i <= endPage; i++) {
      pagesDisplay.push(i)
    }

    if (endPage < totalPages - 1) {
      pagesDisplay.push('...')
    }

    pagesDisplay.push(totalPages)
  }

  return pagesDisplay
}
