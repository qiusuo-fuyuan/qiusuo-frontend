import github from './github';
import google from './google';
import wechat from './wechat';

/**
 * the login procedure for different social account is different. The init parameter could also be different
 */
interface SocialLoginAdapter {
  init(): () => {};
  authenticate: () => {};
  login: () => {};
}

export default {
  wechat,
  github,
  google,
};
