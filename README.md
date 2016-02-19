# React Bare Kit
Quickly start coding with React, Babel, SASS, and Webpack.
This codebase is intended for developers who want to start coding quickly with minimal setup. Tests, builds, and organization
is up to the developer.

1. **Download**: `git clone https://github.com/mattlo/react-bare-kit.git YOUR_PROJECT_NAME`
2. **Install**: `npm install` **supports Node 4.x / NPM 3.x and up only**
3. **Run**: `npm run start`, go to `http://localhost:3000`

After all steps are done, you may start coding immediately, hot module replacement is enabled already.

## Public Server
1. `npm run build`
2. Deploy `./build` on GitHub pages, heroku, nginx, ...; all the files you need are in `./build`.

## Reference for popular installs
- `lodash` named module import (e.g.: `{get} from 'lodash'`): `npm i babel-plugin-lodash -S`