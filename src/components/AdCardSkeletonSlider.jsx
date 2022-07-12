import { Row, Col, Skeleton } from 'antd';
import 'antd/dist/antd.css';
import styles from './AdCardSkeletonSlider.module.css'

const AdCardSkeleton = () => {

  return (
    <div className={styles.bestRealtorsCardSkeleton}>

      <Skeleton.Avatar className={styles.photo} active={true} shape={'square'} />

      <div className={styles.textWrapper}>
        <Skeleton  paragraph={{ rows: 0 }} className={styles.title} active={true} />
        <Skeleton  paragraph={{ rows: 0 }} className={styles.subtitle} active={true} />
      </div>

      <Skeleton  paragraph={{ rows: 0 }} className={styles.button} active={true} />


    </div>
  )
}

export default AdCardSkeleton;