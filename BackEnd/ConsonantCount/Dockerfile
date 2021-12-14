FROM golang:1.17
WORKDIR /app
COPY  ./src .
COPY go.mod .
RUN go mod download
RUN go build -o /docker-gs-ping
EXPOSE 5001
CMD [ "/docker-gs-ping" ]