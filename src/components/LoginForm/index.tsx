import React from 'react';
import GithubLogin from './Github';


export const LoginForm = () => {
  return (
    <form className="form-login">
      <label htmlFor="form__input-phone" className="form__input-phone">
        <input className="form__input-phone" type="text" name="phone" placeholder="手机号码登录" />
      </label>

      <label htmlFor="form__input-code" className="form__input-code">
        <input className="form__input-code" type="text" name="code" placeholder="请输入验证码" />
      </label>
      <GithubLogin />
    </form>
  );
};
