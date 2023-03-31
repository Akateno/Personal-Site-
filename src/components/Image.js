import { useState, useCallback, useEffect } from 'react'
import styles from './image.module.css'
import book from '../photos/book1.png'



const Image = ({ zoom, ...rest }) => {
  const [click, setClick] = useState(false)

  const setFlag = () => {
    setClick(true)
  }

  const unsetFlag = () => {
    setClick(false)
  }

  if (!zoom) return <img src={book} {...rest} />
  else
    return (
      <>
        {click ? (
          <div onClick={unsetFlag} className={`${styles.lightbox} ${styles.show} relative`}>
            <img src={book}{...rest} className={`${styles.show_image}`}></img>
          </div>
        ) : (
          <img src={book} {...rest} onClick={setFlag}></img>
        )}
      </>
    )
}

export default Image

