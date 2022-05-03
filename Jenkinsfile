
node {
    checkout scm
   

    docker.withRegistry('https://hub.docker.com/repository/docker/teodora95/nodejs-helloworld', 'daf7ebbe-1b3e-4c81-9e61-b89acae601c3') {

        def customImage = docker.build("nodejs-helloworld/dockersqlcontainer","-f Dockerfile .")

        /* Push the container to the custom Registry */
        customImage.push("1.0.0")
        
        kubernetesDeploy(configs:"deployment.yaml",kubeconfigId:"kubernetes")
    }
}
