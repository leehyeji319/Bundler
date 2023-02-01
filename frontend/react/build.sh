#!/usr/bin/env bash

IMAGE_NAME="bundler-front-dev"
CONTAINER_ID="$(docker container ls |grep ${IMAGE_NAME}|awk '{print $1}')"
IMAGE_ID="$(docker images -q ${IMAGE_NAME})"
EMPTY_STR=""
echo "image build start"

docker build -t bundler-front-dev .

echo "image build end "
echo "container rm start"
if [ "${CONTAINER_ID}" != "${EMPTY_STR}" ];then

	echo "container rm in start"
	docker rm -f ${CONTAINER_ID}
	echo "container rm in end"
fi
echo "conatiner rm end"

echo "image rm start"
if [ "${IMAGE_ID}" != "${EMPTY_STR}" ];then
	        
	echo "image rm in start"
	docker image rm ${IMAGE_ID}
	echo "image rm in end"
fi
echo "image rm end"
echo "docker run start"
docker run -dp 3000:3000 --mount type=bind,src=$(pwd)/src,target=/react/src --name bundler-front-dev bundler-front-dev
echo "docker run end"
