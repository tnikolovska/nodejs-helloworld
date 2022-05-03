
node {
    checkout scm
   

    docker.withRegistry('docker.io/teodora95/nodejs-helloworld-registry', 'dockerhub-cred-raja') {

        def customImage = docker.build("teodora95/nodejs-helloworld-registry","-f Dockerfile .")

        /* Push the container to the custom Registry */
        customImage.push("1.0.0")
        
        kubernetesDeploy(configs:"deployment.yaml",kubeconfigId:"kubernetes")
    }
}
