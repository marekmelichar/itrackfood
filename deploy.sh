#!/bin/bash

# Define the deploy functions for each environment
deploy_dev() {
    echo "Deploying to dev environment..."
    npm run build && scp -r ./build/* root@84.54.23.28:/var/www/transportplanner-dev
}

deploy_staging() {
    echo "Deploying to staging environment..."
    npm run build:stg && scp -r ./build/* root@84.54.23.28:/var/www/transportplanner-staging
}

deploy_preprod() {
    echo "Deploying to preprod environment..."
    npm run build:preprod && scp -r ./build/* root@38.242.232.12:/var/www/transportplanner-preprod
}

# Prompt the user for input
echo "Please select the environment to deploy to:"
echo "1. dev"
echo "2. staging"
echo "3. preprod"

# Read a single character from the user without requiring Enter
read -n 1 -p "Enter the number corresponding to your choice: " choice
# Echo a newline character
echo

# Function to confirm the deployment
confirm_deployment() {
    read -n 1 -p "Are you sure you want to deploy to $1? (y/n): " confirm
    echo
    if [[ $confirm != [yY] ]]; then
        echo "Deployment to $1 cancelled."
        exit 1
    fi
}

# Execute the corresponding deploy function based on user input
case $choice in
    1)
        confirm_deployment "dev"
        deploy_dev
        ;;
    2)
        confirm_deployment "staging"
        deploy_staging
        ;;
    3)
        confirm_deployment "preprod"
        deploy_preprod
        ;;
    *)
        echo "Invalid choice. Please run the script again and select a valid option."
        ;;
esac