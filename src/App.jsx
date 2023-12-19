import MainContentBox from './features/MainContentBox.jsx';
import PageNotFound from './PageNotFound.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import Subscriptions from './pages/Subscriptions.jsx';
import You from './pages/You.jsx';
import History from './pages/History.jsx';
import Watch from './pages/Watch.jsx';
import { useSelector } from 'react-redux';
import Videos from './features/VIDEOSMAIN/videosMainComponents/Videos.jsx';

function App() {
  const VideosMain = useSelector(store => store.VideosMain);

  console.log(VideosMain.videosIsLoading);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage>
              <MainContentBox>
                <Videos />
              </MainContentBox>
            </HomePage>
          }
        />
        <Route path="/feed/shorts" element={<HomePage></HomePage>} />
        <Route
          path="/feed/subscriptions"
          element={
            <HomePage>
              <Subscriptions />
            </HomePage>
          }
        />
        <Route
          path="/feed/you"
          element={
            <HomePage>
              <You />
            </HomePage>
          }
        />
        <Route
          path="/feed/history"
          element={
            <HomePage>
              <History />
            </HomePage>
          }
        />
        <Route
          path="/Watch"
          element={
            <HomePage>
              <Watch />
            </HomePage>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
