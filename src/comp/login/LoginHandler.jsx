import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const LoginHandler = () => {
  const navigate = useNavigate();
  const code = new URL(window.location.href).searchParams.get("code");

  const kakaoLogin = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/login?code=${code}`);
      console.log(res);
      localStorage.setItem("TOKEN", res.data)
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
    <div className="LoginHandler">
      <div className="notice">
        <p>로그인 중입니다.</p>
        <p>잠시만 기다려주세요.</p>
        <div className="spinner"></div>
      </div>
    </div>
  );
};

export default LoginHandler;
