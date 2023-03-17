cd ..
yarn build-storybook
chmod 777 storybook-static
cp deploy/Dockerfile storybook-static/
cp deploy/httpd.conf storybook-static/ 
cp deploy/create-docker-develop.sh storybook-static/ 
cd storybook-static/
./create-docker-develop.sh