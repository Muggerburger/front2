import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const LoginHandeler = (props) => {
  /*const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

    const kakaoLogin = async () => {
      await axios.get(`http://localhost:8080/login?code=${code}`) // 1. url을 8080으로
      .then(res => {
        console.log(res);
        //계속 쓸 정보들( ex: 이름) 등은 localStorage에 저장해두자
        localStorage.setItem("name", res.data.account.kakaoName);
        //로그인이 성공하면 이동할 페이지
        navigate(`/home`);
    })
    .catch(error => {
        console.error('오류 발생:', error.response);
        alert('실패했습니다.');
    });
  }
 
  useEffect(() => {
    kakaoLogin();
  }, [props.history]); */
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const kakaoLogin = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/login?code=${code}`);
      console.log(res);
      // 로그인이 성공하면 이동할 페이지로 navigate
      navigate(`/home?code=${code}`);
    } catch (error) {
      console.error('오류 발생:', error.response);
      alert('실패했습니다.');
    }
  };

  useEffect(() => {
    kakaoLogin();
  }, []);


  return (
    <div className="LoginHandeler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoginHandeler;