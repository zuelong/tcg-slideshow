## How To Set Up

1. Install Git: https://git-scm.com/downloads
2. Clone this repository: `git clone https://github.com/zuelong/tcg-slideshow.git`
3. Install NPM: https://www.npmjs.com/get-npm
4. Run the following in the root directory of this application:
```
npm install -g yarn
npm install
cd client
yarn
cd ..
```

## How To Run
In the root directory of the app, run the following:
```
git pull
cd client
yarn build
cd ..
npm start
```

The server will spin up at http://localhost:5000

## How To Edit Files

Shove whatever files you need inside of `./client/public/flyers`.  They don't need any specific names, my code will handle the rest