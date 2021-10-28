FROM node:erbium

# Create app directory
WORKDIR /var/www/

#Copy package.json and package-lock to enjoy caching
COPY package*.json ./

RUN npm install

COPY . .

# copy scripts to bin and make them executable

COPY ./scripts/app /usr/local/bin/

RUN chmod +x -R /usr/local/bin

EXPOSE 5000

ENTRYPOINT ["start.sh"]
