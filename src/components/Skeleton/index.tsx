import React from 'react'
import './styles.css'

interface ISkeleton {
  width?: string,
  height?: string,
  marginTop?: string,
}

const Skeleton: React.FC<ISkeleton> = ({width = '100%', height, marginTop}) => {
  const styles: ISkeleton = {}
  if (width) styles.width = width
  if (height) styles.height = height
  if (marginTop) styles.marginTop = marginTop

  return (
    <div className="skeleton" style={styles} />
  )
}

export default Skeleton
