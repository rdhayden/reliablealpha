# pull official base image
FROM node:14.17-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN npm install
RUN npm install react-scripts@3.4.1 -g
RUN npm install yarn

# add app
COPY . ./

# start app
CMD ["yarn", "start"]
