export const handleImageLoad = (
  id: number,
  event: React.SyntheticEvent<HTMLImageElement>,
  setImageClass: any,
  style: any,
) => {
  const { naturalWidth, naturalHeight } = event.currentTarget
  const orientationClass =
    naturalWidth > naturalHeight ? style.cover : style.contain
  setImageClass((prev: string) => {
    const newImageClass = [...prev]
    newImageClass[id] = orientationClass
    return newImageClass
  })
}
