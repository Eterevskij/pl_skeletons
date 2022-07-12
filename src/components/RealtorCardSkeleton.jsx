import { Row, Col, Skeleton } from 'antd';
import 'antd/dist/antd.css';
import styles from './RealtorCardSkeleton.module.css'

const RealtorCardSkeleton = () => {

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className={styles.card}>

      <div className={styles.cardWrapper}>

        <div className={styles.photoWrapper}>
          <Skeleton.Avatar className={styles.photo} shape={'square'} active={true} />
        </div>

        <div className={styles.infoWrapper}>

          <div className={styles.topInfo}>


            <div className={styles.nameWrapper}>
              <Skeleton paragraph={0} active={true} />
            </div>

            <div className={styles.locationWrapper}>
              <Skeleton paragraph={0} active={true} />
            </div>

            <div className={styles.tagsWrapper}>
              <div className={styles.tags}>
                {
                  Array(getRandom(2, 4)).fill(1).map(category => {
                    return (
                      <Skeleton className={styles.tagsItem} style={{ width: getRandom(15, 25) + '%' }} paragraph={{ rows: 0 }} active={true} shape={'square'} />
                    )
                  })
                }
              </div>




            </div>

            

          </div>

          <div className={styles.bottomInfo}>


<div className={styles.priceWrapper}>
  <Skeleton paragraph={0} active={true} />
</div>


<div className={`${styles.realtorWrapper} ${styles.desktop}`}>
  <Skeleton paragraph={0} active={true} />
</div>
</div>

        </div>

        <div className={`${styles.realtorWrapper} ${styles.mobile}`}>
          <Skeleton paragraph={0} active={true} />
        </div>

      </div>


    </div>
  )
}

export default RealtorCardSkeleton;