kubectl apply -f kubernets/mongodb/
mvn clean install
docker build -f docker-files/Dockerfile -t kubernetes-example:1.0 .
kubectl apply -f kubernets/micro-service/
docker build --rm -f web/Dockerfile -t web-ui:1.0 web
kubectl apply -f web/kubernetes/
