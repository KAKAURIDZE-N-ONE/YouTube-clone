import useClickAnimation from '../../../hooks/useClickAnimation';
import styles from './GoogleSignIn.module.css';
import Person from '../MainNavBarSvgs/Person';
function GoogleSignIn() {
  const { isclickmoment, handleMouseDown, handleMouseUp } = useClickAnimation();

  return (
    <a
      href="https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.youtube.com%2Fsignin%3Faction_handle_signin%3Dtrue%26app%3Ddesktop%26hl%3Den%26next%3Dhttps%253A%252F%252Fwww.youtube.com%252F&hl=en&ifkv=ASKXGp3uZKyoC5HCTgO6DVSJ4ZTjAAk3ZdRs9MS6IkH1joy1L8QYQH-ZPiMRoy4JHIwmXx11Fblkcw&passive=true&service=youtube&uilel=3&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1946162532%3A1702722699546860&theme=glif"
      style={{ textDecoration: 'none' }}
    >
      <div
        className={styles['sign-in-box']}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        style={isclickmoment ? { backgroundColor: ' #67b7fd51' } : {}}
      >
        <Person />
        <h1 className={styles['sign-in-text']}>Sign in</h1>
      </div>
    </a>
  );
}

export default GoogleSignIn;
