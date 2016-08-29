IMAGE=0xmjk/jsonp-proxy

build: Dockerfile
	docker build -t $(IMAGE) .

run:
	docker run -it -p 8080:8080 --rm --entrypoint sh $(IMAGE)

