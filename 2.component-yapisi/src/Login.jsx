import React from "react";

function Login() {
  return (
    <>
      <div>
        <p>Kullanıcı Adınız</p>
        <input type="text" />
      </div>
      <div>
        <p>Şifreniz</p>
        <input type="text" />
      </div>
      <br />
      <div>
        <button>Giriş Yap</button>
      </div>
    </>
  );
}

export default Login;
