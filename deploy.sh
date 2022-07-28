rm -rf dist
yarn build
cd dist
git init
git add .
git commit -m 'update'
git remote add origin git@github.com:baIder/rich-ui-website.git
git branch -M main
git push -f -u origin main
cd -
