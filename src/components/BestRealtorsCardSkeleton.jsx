import { Row, Col, Skeleton } from 'antd';
import 'antd/dist/antd.css';
import style from './BestRealtorsCardSkeleton.module.css';

const BestRealtorsCardSkeleton = (props) => {

  const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div className={style.card}>

      <div className={style.placeInTopWrapper}>
        <Skeleton paragraph={0} active={true} />
      </div>

      <div className={style.photoWrapper}>
        <Skeleton.Avatar shape={'square'} active={true} />
      </div>

      <div className={style.nameAndLocationWrapper}>
        <Skeleton className={style.name} paragraph={0} active={true} />
        <Skeleton className={style.location} paragraph={0} active={true} />
      </div>

      <div className={style.tagsWrapper}>
        <div className={style.tags}>

          {
            Array(getRandom(2, 5)).fill(1).map(category => {
              return (
                <Skeleton className={style.tagsItem} style={{ width: getRandom(20, 40) + '%' }} paragraph={{ rows: 0 }} active={true} shape={'square'} />
              )
            })
          }

        </div>
      </div>

      <div className={style.ratingWrapper}>
        <Skeleton className={style.rating} paragraph={0} active={true} />
      </div>

    </div>
  )
}

export default BestRealtorsCardSkeleton;