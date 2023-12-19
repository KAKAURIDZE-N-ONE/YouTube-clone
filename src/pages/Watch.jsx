import styles from './Watch.module.css';
import { Link, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';

import video1 from '../features/VIDEOSMAIN/videos/video1.mp4';
import video2 from '../features/VIDEOSMAIN/videos/video2.mp4';
import video3 from '../features/VIDEOSMAIN/videos/video3.mp4';
import video4 from '../features/VIDEOSMAIN/videos/video4.mp4';
import video5 from '../features/VIDEOSMAIN/videos/video5.mp4';
import video6 from '../features/VIDEOSMAIN/videos/video6.mp4';
import video7 from '../features/VIDEOSMAIN/videos/video7.mp4';
import video8 from '../features/VIDEOSMAIN/videos/video8.mp4';
import video9 from '../features/VIDEOSMAIN/videos/video9.mp4';
import video10 from '../features/VIDEOSMAIN/videos/video10.mp4';
import video11 from '../features/VIDEOSMAIN/videos/video11.mp4';
import video12 from '../features/VIDEOSMAIN/videos/video12.mp4';

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
  const VideosMain = useSelector(store => store.VideosMain);
  const [videoDetails, setVideoDetails] = useState();
  const [searchParams] = useSearchParams();
  const [videoIsplaying, setVideoIsPlaying] = useState(true);
  const videoId = searchParams.get('v');
  const videoRef = useRef(null);
  const videoBoxRef = useRef(null);

  useEffect(
    function () {
      if (!VideosMain.videosIsLoading) {
        setVideoDetails(
          VideosMain.videosArr.filter(el => el.id === Number(videoId))[0]
        );
      }
    },
    [VideosMain.videosIsLoading, VideosMain.videosArr, videoDetails, videoId]
  );

  function handleVideoClick() {
    if (videoIsplaying) {
      videoRef.current.pause();
      setVideoIsPlaying(false);
    } else {
      videoRef.current.play();
      setVideoIsPlaying(true);
    }
  }

  if (!VideosMain.videosIsLoading && videoDetails)
    return (
      <div className={styles.WatchFullContent}>
        <div className={styles.videoContent}>
          <div className={styles.videoBox} ref={videoBoxRef}>
            <video
              onClick={handleVideoClick}
              ref={videoRef}
              className={`${styles.video} video`}
              src={videosArr[videoDetails.id]}
              autoPlay
              loop
            />
          </div>
          <h1 style={{ color: '#fff', marginTop: '1.2rem' }}>
            {videoDetails.videoName}
          </h1>
          <div className={styles.videoManipulationsAndPageDescBox}>
            <img className={styles.pageImg} src={videoDetails.pageImg} />
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                marginLeft: '1rem',
              }}
            >
              <h1 className={styles.pageName}>{videoDetails.pageName}</h1>
              <h1 className={styles.subscribers}>
                {videoDetails.subscribers} subscribers
              </h1>
            </div>
            <div className={styles.subscribeButton}>
              <h1
                style={{
                  color: '#0f0f0f',
                  fontSize: '1.4rem',
                  fontWeight: '500',
                }}
              >
                Subscribe
              </h1>
            </div>
            <div
              className={styles.likeAndDislikeBox1}
              style={{ marginLeft: 'auto', marginRight: '0.8rem' }}
            >
              <div
                className={styles.likeDiv}
                style={{
                  display: 'flex',
                  fontSize: '8px',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '5px',
                  paddingTop: '6px',
                  paddingBottom: '6px',
                  paddingRight: '15px',
                  paddingLeft: '13px',
                  borderTopLeftRadius: '100px',
                  borderBottomLeftRadius: '100px',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  focusable="false"
                  style={{ fill: '#fff' }}
                >
                  <path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path>
                </svg>
                <h1
                  style={{
                    color: '#fff',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  716
                </h1>
              </div>
              <div
                style={{
                  height: '22px',
                  width: '0.1px',
                  backgroundColor: 'rgba(255,255,255,0.3)',
                }}
              ></div>
              <div
                style={{
                  height: '36px',
                  width: '55px',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  focusable="false"
                  style={{
                    fill: '#fff',
                    minHeight: '36px',
                    minWidth: '36px',
                    paddingTop: '6px',
                    paddingBottom: '6px',
                    paddingLeft: '13px',
                    paddingRight: '15px',
                    marginLeft: '1px',
                    borderTopRightRadius: '100px',
                    borderBottomRightRadius: '100px',
                  }}
                >
                  <path d="M17,4h-1H6.57C5.5,4,4.59,4.67,4.38,5.61l-1.34,6C2.77,12.85,3.82,14,5.23,14h4.23l-1.52,4.94C7.62,19.97,8.46,21,9.62,21 c0.58,0,1.14-0.24,1.52-0.65L17,14h4V4H17z M10.4,19.67C10.21,19.88,9.92,20,9.62,20c-0.26,0-0.5-0.11-0.63-0.3 c-0.07-0.1-0.15-0.26-0.09-0.47l1.52-4.94l0.4-1.29H9.46H5.23c-0.41,0-0.8-0.17-1.03-0.46c-0.12-0.15-0.25-0.4-0.18-0.72l1.34-6 C5.46,5.35,5.97,5,6.57,5H16v8.61L10.4,19.67z M20,13h-3V5h3V13z"></path>
                </svg>
              </div>
            </div>
            <div
              className={styles.likeAndDislikeBox}
              style={{ marginRight: '0.8rem' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style={{
                  fill: '#fff',
                  minWidth: '24px',
                  minHeight: '24px',
                }}
              >
                <path d="M15 5.63 20.66 12 15 18.37V14h-1c-3.96 0-7.14 1-9.75 3.09 1.84-4.07 5.11-6.4 9.89-7.1l.86-.13V5.63M14 3v6C6.22 10.13 3.11 15.33 2 21c2.78-3.97 6.44-6 12-6v6l8-9-8-9z"></path>
              </svg>
              <h1
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  fontSize: '1.4rem',
                }}
              >
                Share
              </h1>
            </div>
            <div
              className={styles.likeAndDislikeBox}
              style={{ marginRight: '0.8rem' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style={{ fill: '#fff' }}
              >
                <path d="M17 18v1H6v-1h11zm-.5-6.6-.7-.7-3.8 3.7V4h-1v10.4l-3.8-3.8-.7.7 5 5 5-4.9z"></path>
              </svg>
              <h1
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  fontSize: '1.4rem',
                }}
              >
                Download
              </h1>
            </div>
            <div
              className={styles.likeAndDislikeBox}
              style={{ padding: '0.6rem' }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
                focusable="false"
                style={{ fill: '#fff' }}
              >
                <path d="M7.5 12c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5zm4.5-1.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm6 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path>
              </svg>
            </div>

            {/* <div className={styles.videoFullDescription}>
            <h1
              style={{
                color: '#fff',
                fontSize: '1.4rem',
                fontWeight: '400',
                lineHeight: '2rem',
              }}
            >
              65,862,840 views May 8, 2023 #Oppenheimer Oppenheimer - In
              Theaters 7 21 23 Written and directed by Christopher Nolan,
              Oppenheimer is an IMAX®-shot epic thriller that thrusts audiences
              into the pulse-pounding paradox of the enigmatic man who must risk
              destroying the world in order to save it. The film stars Cillian
              Murphy as J. Robert Oppenheimer and Emily Blunt as his wife,
              biologist and botanist Katherine “Kitty” Oppenheimer. Oscar®
              winner Matt Damon portrays General Leslie Groves Jr., director of
              the Manhattan Project, and Robert Downey, Jr. plays Lewis Strauss,
              a founding commissioner of the U.S. Atomic Energy Commission.
              Academy Award® nominee Florence Pugh plays psychiatrist Jean
              Tatlock, Benny Safdie plays theoretical physicist Edward Teller,
              Michael Angarano plays Robert Serber and Josh Hartnett plays
              pioneering American nuclear scientist Ernest Lawrence. Oppenheimer
              also stars Oscar® winner Rami Malek and reunites Nolan with
              eight-time Oscar® nominated actor, writer and filmmaker Kenneth
              Branagh. The cast includes Dane DeHaan (Valerian and the City of a
              Thousand Planets), Dylan Arnold (Halloween franchise), David
              Krumholtz (The Ballad of Buster Scruggs), Alden Ehrenreich (Solo:
              A Star Wars Story) and Matthew Modine (The Dark Knight Rises). The
              film is based on the Pulitzer Prize-winning book American
              Prometheus: The Triumph and Tragedy of J. Robert Oppenheimer by
              Kai Bird and the late Martin J. Sherwin. The film is produced by
              Emma Thomas, Atlas Entertainment’s Charles Roven and Christopher
              Nolan. Oppenheimer is filmed in a combination of IMAX® 65mm and
              65mm large-format film photography including, for the first time
              ever, sections in IMAX® black and white analogue photography.
              Nolan’s films, including Tenet, Dunkirk, Interstellar, Inception
              and The Dark Knight trilogy, have earned more than $5 billion at
              the global box office and have been awarded 11 Oscars and 36
              nominations, including two Best Picture nominations. Social
              Handles: IG: / oppenheimermovie TW: / @oppenheimerfilm FB: /
              oppenheimermovie Reddit: / oppenheimermovie Twitch: /
              oppenheimermovie Website: https://www.OppenheimerMovie.com
              #Oppenheimer
            </h1>
          </div> */}
          </div>
        </div>
        <div className={styles.videosContent}>
          <div className={styles.videoBlocksFullCont}>
            {VideosMain.videosArr.map(el => {
              if (el.id !== Number(videoId))
                return (
                  <Link
                    to={`/watch?v=${el.id}`}
                    className={styles.videoBlock}
                    style={{
                      height: '94px',
                      gap: '7px',
                      textDecoration: 'none',
                    }}
                    key={el.id}
                  >
                    <img
                      src={el.videoImg}
                      style={{
                        width: '168px',
                        height: '94px',
                        borderRadius: '8px',
                      }}
                    ></img>
                    <div style={{ height: '100%', width: '100%' }}>
                      <h2
                        style={{
                          color: '#fff',
                          fontWeight: '500',
                          fontSize: '14px',
                        }}
                      >
                        {el.videoName}
                      </h2>
                      <h3
                        style={{
                          color: '#aaa',
                          fontSize: '12px',
                          fontWeight: '500',
                          marginTop: '8px',
                        }}
                      >
                        {el.pageName}
                      </h3>
                      <div
                        style={{
                          color: '#aaa',
                          display: 'flex',
                          marginTop: '4px',
                        }}
                      >
                        <h1 style={{ fontSize: '12px', fontWeight: '400' }}>
                          {el.quantityOfViews} views
                        </h1>
                        <div className={styles.videoDescriptionDot}></div>
                        <h1 style={{ fontSize: '12px', fontWeight: '400' }}>
                          {el.uploadDate}
                        </h1>
                      </div>
                    </div>
                  </Link>
                );
            })}
          </div>
        </div>
      </div>
    );
}

export default Watch;
