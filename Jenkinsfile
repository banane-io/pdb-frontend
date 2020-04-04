#!/usr/bin/env groovy

pipeline {
    agent any

    stages {
        stage('Build master and deploy') {
            when {
                branch 'master'
            }
            steps {
                script {
                    sh 'npm install && npm run build'
                    sh 'rm -rf /var/www/pdb.magames.work'
                    sh 'cp -r $(pwd)/pdb-frontend/dist /var/www/pdb.magames.work'
                }
            }
        }

        stage('Build develop and deploy') {
            when {
                branch 'develop'
            }
            steps {
                script {
                    sh 'npm install && npm run build'
                    sh 'll'
                    sh 'cd $(pwd)/pdb-frontend/dist'
                    sh 'll'
                    //sh 'rm -rf /var/www/dev.magames.work'
                    //sh 'cp -r $(pwd)/pdb-frontend/dist /var/www/dev.magames.work'
                }
            }
        }
    }

    post {
        always {
            junit allowEmptyResults: true, testResults: '**/build/test-results/junit-platform/TEST-*.xml'
        }
    }
}
