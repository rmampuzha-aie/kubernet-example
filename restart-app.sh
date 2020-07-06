kubectl delete	 -f kubernets/micro-service/site-mc-service-config-deployment.yaml
mvn clean install
docker build -f docker-files/Dockerfile -t kubernetes-example:1.0 .
kubectl apply -f kubernets/micro-service/site-mc-service-config-deployment.yaml
