pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'addu0411/jenkins:ad'
        CONTAINER_NAME = 'container-1'
    }

    stages {
        stage('Pull Docker Image') {
            steps {
                script {
                    sh "/usr/bin/docker pull ${DOCKER_IMAGE}"  // Use full path to Docker
                }
            }
        }

        stage('Cleanup Existing Container') {
            steps {
                script {
                    // Stop and remove the existing container if it exists
                    sh """
                    if [ \$(docker ps -aq -f name=${CONTAINER_NAME}) ]; then
                        /usr/bin/docker stop ${CONTAINER_NAME}  
                        /usr/bin/docker rm ${CONTAINER_NAME}    
                    fi
                    """
                }
            }
        }

        stage('Deploy Docker Image') {
            steps {
                script {
                    sh """
                    /usr/bin/docker run -d --name ${CONTAINER_NAME} -p 80:80 ${DOCKER_IMAGE}  
                    """
                }
            }
        }

        // stage('Cleanup') {
        //     steps {
        //         script {
        //             sh "/usr/bin/docker ps -a"  // Use full path to Docker for listing containers
        //         }
        //     }
        // }
    }
}