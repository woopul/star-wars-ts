import React, { Children, ReactElement, useState } from 'react';
import { IMovie } from '../../api/api.types'
import { ReactComponent as ArrowClose } from '../../assets/icons/ARROW CLOSE.svg'
import { ReactComponent as ArrowOpen } from '../../assets/icons/ARROW OPEN.svg'
import styles from './ExpandableItem.module.scss';

interface IExpandableElement {
  text: string,
  children?: React.ReactElement<any>
}

const ExpandableItem = ({text = 'Expandable Item', children} : IExpandableElement) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const propsChildren = React.Children.toArray(children).map((child) =>
    React.cloneElement(child as ReactElement<any>, { isOpen }),
  )

  return (
    <div className={styles.container}>
      <div className={`${styles.item} ${isOpen && styles.expanded}`}>
        <p className={styles.item__text}>{text}</p>
        {isOpen ?
          <ArrowClose onClick={() => setIsOpen(false)} /> :
          <ArrowOpen onClick={() => setIsOpen(true)} />}
      </div>
      <div className={`${styles.expandedField} ${isOpen && styles.expanded}`}>
        {isOpen && propsChildren}
      </div>
    </div>

  )
}

export default ExpandableItem;