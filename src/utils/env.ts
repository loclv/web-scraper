import * as dotenv from 'dotenv';

enum ErrCode {
  Env = 2,
}

const res = dotenv.config();

if (res.error) {
  console.error('In env: ', res.error);
  process.exit(ErrCode.Env);
}

// URL=http://books.toscrape.com
const URL = process.env.URL || '';
if (URL === '') {
  console.error('In env: URL is not found!');
  process.exit(ErrCode.Env);
}

export { URL };
