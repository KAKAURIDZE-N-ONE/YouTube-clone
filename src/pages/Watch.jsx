import styles from "./Watch.module.css";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import video1 from "../features/VIDEOSMAIN/videos/video1.mp4";
import video2 from "../features/VIDEOSMAIN/videos/video2.mp4";
import video3 from "../features/VIDEOSMAIN/videos/video3.mp4";
import video4 from "../features/VIDEOSMAIN/videos/video4.mp4";
import video5 from "../features/VIDEOSMAIN/videos/video5.mp4";
import video6 from "../features/VIDEOSMAIN/videos/video6.mp4";
import video7 from "../features/VIDEOSMAIN/videos/video7.mp4";
import video8 from "../features/VIDEOSMAIN/videos/video8.mp4";
import video9 from "../features/VIDEOSMAIN/videos/video9.mp4";
import video10 from "../features/VIDEOSMAIN/videos/video10.mp4";
import video11 from "../features/VIDEOSMAIN/videos/video11.mp4";
import video12 from "../features/VIDEOSMAIN/videos/video12.mp4";
import VideoBox from "../features/WATCH/VideoBox";
import WatchVideo from "../features/WATCH/WatchVideo";
import SideVideoBlock from "../features/WATCH/SideVideoBlock";
import SubscribeButton from "../features/WATCH/SubscribeButton";
import LikeAndDislikeBox from "../features/WATCH/LikeAndDislikeBox";
import ShareButton from "../features/WATCH/ShareButton";
import DownloadButton from "../features/WATCH/DownloadButton";
import ThreeDotButton from "../features/WATCH/ThreeDotButton";

const videosArr = [
  video1,
  video2,
  video3,
  video4,
  video5,
  video6,
  video7,
  video8,
  video9,
  video10,
  video11,
  video12,
];

function Watch() {
  const VideosMain = useSelector((store) => store.VideosMain);
  const [videoDetails, setVideoDetails] = useState();
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  useEffect(() => {
    if (videoDetails) document.title = videoDetails.videoName;
  }, [videoDetails]);

  useEffect(
    function () {
      if (!VideosMain.videosIsLoading) {
        setVideoDetails(
          VideosMain.videosArr.filter((el) => el.id === Number(videoId))[0]
        );
      }
    },
    [VideosMain.videosIsLoading, VideosMain.videosArr, videoDetails, videoId]
  );

  if (!VideosMain.videosIsLoading && videoDetails)
    return (
      <div className={styles.WatchFullContent}>
        <div className={styles.videoContent}>
          <VideoBox>
            <WatchVideo videoSrc={videosArr[videoDetails.id]} />
          </VideoBox>

          <h1 style={{ color: "#fff", marginTop: "1.2rem" }}>
            {videoDetails.videoName}
          </h1>
          <div className={styles.videoManipulationsAndPageDescBox}>
            <div style={{ display: "flex" }}>
              <img className={styles.pageImg} src={videoDetails.pageImg} />
              <div className={styles.PageNameAndSubscribersBox}>
                <h1 className={styles.pageName}>{videoDetails.pageName}</h1>
                <h1 className={styles.subscribers}>
                  {videoDetails.subscribers} subscribers
                </h1>
              </div>
              <SubscribeButton />
            </div>
            <div className={styles["for-mobile"]}>
              <LikeAndDislikeBox />
              <ShareButton />
              <DownloadButton />
              <ThreeDotButton />
            </div>
          </div>
        </div>

        <div className={styles.videosContent}>
          <div className={styles.videoBlocksFullCont}>
            {VideosMain.videosArr.map((el) => {
              if (el.id !== Number(videoId))
                return <SideVideoBlock key={el.id} el={el} />;
            })}
          </div>
        </div>
      </div>
    );
}

export default Watch;
