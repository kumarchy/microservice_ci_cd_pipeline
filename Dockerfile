FROM jenkins/jenkins:lts

USER root

Run apt-get update && \
    apt-get install -y docker.io docker-compose

RUN usermod -aG docker jenkins

USER jenkins