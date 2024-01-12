import "./main.css";

function Main({ onButtonClick }) {
  return (
    <div>
      <div id="logo">다짐</div>
      <button className="loginBtn" id="googleLogin" onClick={onButtonClick} />
      <button className="loginBtn" id="kakaoLogin" onClick={onButtonClick} />
      <button className="loginBtn" id="guestLogin" onClick={onButtonClick} />
    </div>
  );
}

export default Main;
