FROM node:16.17.1

WORKDIR /app


COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ADD . .

RUN npm install

ENTRYPOINT ["/entrypoint.sh"]

CMD ["npm", "run", "dev"]