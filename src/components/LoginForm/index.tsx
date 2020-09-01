import React from 'react';
import GithubLogin from './Github';


export const LoginForm = () => {
  return (
    <form className="form-login">
      <label htmlFor="form__input-name" className="form__input-name">用户名
        <input className="form__input-name" type="text" name="username" />
      </label>


      <label htmlFor="form__input-pwd" className="form__input-pwd">密码
        <input className="form__input-pwd" type="text" name="username" />
      </label>
      <GithubLogin />
    </form>
  );
};
