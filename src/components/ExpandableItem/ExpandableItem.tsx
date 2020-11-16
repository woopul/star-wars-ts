import React, { ReactElement, useState } from 'react';
import { ReactComponent as ArrowClose } from '../../assets/icons/ARROW_CLOSE.svg'
import { ReactComponent as ArrowOpen } from '../../assets/icons/ARROW_OPEN.svg'
import styles from './ExpandableItem.module.scss';

interface IExpandableElement {
  text: string,
  children?: React.ReactElement<any>
}

const ExpandableItem = ({ text = 'Expandable Item', children }: IExpandableElement) => {
  const [isOpen, setIsOpen] = useState(false);

  const propsChildren = React.Children.toArray(children).map((child) =>
    React.cloneElement(child as ReactElement<any>, { isOpen }),
  )

  return (
    <div className={styles.container}>
      <div onClick={() => setIsOpen(prev => !prev)} className={`${styles.item} ${isOpen && styles.expanded}`}>
        <p className={styles.item__text}>{text}</p>
        {isOpen ?
          <ArrowClose /> :
          <ArrowOpen />}
      </div>
      <div className={`${styles.expandedField} ${isOpen && styles.expanded}`}>
        {isOpen && propsChildren}
      </div>
    </div>

  )
}

export default ExpandableItem;