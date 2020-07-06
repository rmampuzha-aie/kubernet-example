# kubernet-example
This example demostrates Kubernetes deployment of MongoDB, a microservice and a front end application.

## About application
Application demostrate all  CRUD oprations. The front end UI application is deployed on Nginx server 80 port. It delivers the static files and route the API calls to microservice. Microservice has APIs to perform CRUD operations on backed Mongo DB.
Application captures website names and its rating. Application has list page, create test data page, delete and update sites pages.

## Run application
### Pre-requisites
Maven/JDK 1.8 should be installed and accessible in PATH.

### Install

A shell scrit has been provided to perform all activities.

```
./install-all.sh

```

### Uninstall

```
./delete-all.sh

```
