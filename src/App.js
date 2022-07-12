import { Row, Col } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import BestRealtorsCardSkeleton from './components/BestRealtorsCardSkeleton';
import AdCardSkeleton from './components/AdCardSkeletonSlider';
import RealtorCardSkeleton from './components/RealtorCardSkeleton';
import AdCartCardSkeleton from './components/AdCardSkeleton';



function App() {
  return (
    <div className="App">

      <div className="container">

        <section className='newAd'>

          <div className="bestRealtorsSlider">

            <div className="bestRealtorsCardSkeletonWrapper">
              <AdCardSkeleton />
            </div>

          </div>

        </section>

        <BestRealtorsCardSkeleton />

        <section className='RealtorCardSkeletonWrapper'>
          <RealtorCardSkeleton />
        </section>

        <section className='AdCartCardSkeletonWrapper'>
          <AdCartCardSkeleton />
        </section>

      </div>
    </div>
  );
}

export default App;
