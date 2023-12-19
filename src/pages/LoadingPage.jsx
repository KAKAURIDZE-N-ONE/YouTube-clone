import LoadingVideos from '../features/LoadingComponents/LoadingVideos';
import TwoLineLoading from '../features/LoadingComponents/TwoLineLoading';
import MainNav from '../features/MAINNAVBAR/MainNavBarComponents/MainNav';
import MainContentBox from '../features/MainContentBox';

function LoadingPage() {
  return (
    <div>
      <MainNav />;
      <TwoLineLoading />
      <MainContentBox needLoadingMarginTop={true}>
        <LoadingVideos />
      </MainContentBox>
    </div>
  );
}

export default LoadingPage;
