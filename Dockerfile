FROM mcr.microsoft.com/playwright:v1.52.0-noble

RUN mkdir /app
WORKDIR /app
COPY . /app/

RUN npm install --force
RUN npx playwright install

#docker build -t tag-name .
#docker run -it tag name 
#docker-compose up --build