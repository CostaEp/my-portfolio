pipeline {
    agent any

    parameters {
        choice(
            name: 'ENVIRONMENT',
            choices: ['DEV', 'PROD'],
            description: 'Choose the environment to deploy to'
        )
    }

    environment {
        DOCKER_USERNAME = 'costadevop'
        IMAGE_NAME = "${DOCKER_USERNAME}/my-portfolio"
        IMAGE_TAG  = "${BUILD_NUMBER}"
    }

    stages {
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Checkout') {
            steps {
                dir('source') {
                    git branch: 'main', url: 'https://github.com/CostaEp/my-portfolio'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('source') {
                    sh 'docker version'
                    sh "docker build -t ${IMAGE_NAME}:${IMAGE_TAG} ."
                    sh "docker tag ${IMAGE_NAME}:${IMAGE_TAG} ${IMAGE_NAME}:latest"
                    sh 'docker images -a'
                    sh 'mkdir -p build'
                    sh 'tar --exclude=build -czf build/artifact.tar.gz .'
                    // archiveArtifacts artifacts: 'build/*.tar.gz', followSymlinks: false
                }
            }
        }

        stage('TEST......') {
            steps {
                echo "start testing ......."
                echo "test pass"
            }
        }

        stage('Push to JFrog') {
            when {
                expression { params.ENVIRONMENT == 'PROD' }
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'jfrog-docker', usernameVariable: 'JFROG_USER', passwordVariable: 'JFROG_PASS')]) {
                    // sh '''
                    //     echo "$JFROG_PASS" | docker login trialam94b7.jfrog.io --username "$JFROG_USER" --password-stdin

                    //     docker tag ${IMAGE_NAME}:${IMAGE_TAG} trialam94b7.jfrog.io/docker-local/${IMAGE_NAME}:${IMAGE_TAG}
                    //     docker push trialam94b7.jfrog.io/docker-local/${IMAGE_NAME}:${IMAGE_TAG}
                    // '''
                    sh '''
                        echo "$JFROG_PASS" | docker login trialam94b7.jfrog.io --username "$JFROG_USER" --password-stdin

                        docker tag ${IMAGE_NAME}:${IMAGE_TAG} trialam94b7.jfrog.io/docker-local/${IMAGE_NAME}:${IMAGE_TAG}
                        docker tag ${IMAGE_NAME}:latest trialam94b7.jfrog.io/docker-local/${IMAGE_NAME}:latest

                        docker push trialam94b7.jfrog.io/docker-local/${IMAGE_NAME}:${IMAGE_TAG}
                        docker push trialam94b7.jfrog.io/docker-local/${IMAGE_NAME}:latest
                    '''
                }
            }
        }

        stage('Push to DockerHub') {
            when {
                expression { params.ENVIRONMENT == 'DEV' }
            }
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh '''
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push ${IMAGE_NAME}:${IMAGE_TAG}
                        docker push ${IMAGE_NAME}:latest
                    '''
                }
            }
        }
    }
    post {
        success {
            echo "Build ${BUILD_NUMBER} completed successfully for ${params.ENVIRONMENT}"
            build job: 'pipeline-CD', parameters: [
            string(name: 'ENVIRONMENT', value: "${params.ENVIRONMENT}")
            ], wait: true, propagate: false
        }
        failure {
            echo "Build ${BUILD_NUMBER} failed for ${params.ENVIRONMENT}"
        }
        always {
            archiveArtifacts artifacts: 'source/build/*.tar.gz', followSymlinks: false
        }
    }
}