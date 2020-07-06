kubectl delete -f kubernetes/
docker build --rm -f Dockerfile -t web-ui:1.0 .
kubectl apply -f kubernetes/