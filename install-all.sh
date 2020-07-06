kubectl apply -f kubernetes/mongodb/
mvn clean install
sleep 5
docker build -f docker-files/Dockerfile -t kubernetes-example:1.0 .
kubectl apply -f kubernetes/micro-service/
docker build --rm -f web/Dockerfile -t web-ui:1.0 web
sleep 5
kubectl apply -f web/kubernetes/
