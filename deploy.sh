rm -rf dist
yarn build
git init
git add .
git commit -m 'init'
git remote add origin git@github.com:baIder/rich-ui-website.git
git branch -M main
git push -f -u origin main
cd -