#base image
FROM node

# set working directory
RUN mkdir /usr/src/app
#copy all files from current directory to docker
COPY . /usr/src/app

# build for production purpose
#RUN yarn run build

WORKDIR /usr/src/app

# add `/usr/src/app/node_modules/.bin` to $PATH
ENV PATH /usr/src/app/node_modules/.bin:$PATH

# install and cache app dependencies
RUN yarn

# start app
CMD ["npm", "start"]