# Women Who Code Austin Lightning Talk App

Women Who Code Austin Network hosts lightning talk every first Monday of the month. You can come to hang out, or sign up to talk [here](https://www.meetup.com/Women-Who-Code-Austin/events/)!

Currently talk sign-ups are through Google form, and organizers have to manually create forms for each month. The minimal viable product(MVP) for this project is to automatically direct sign-ups to the correct month.

### To run the project
The project is currently using:
 * HTML, CSS and vanilla javascript front-end
 * [Serverless](https://serverless.com/) architecture back-end, with AWS lambda in Python
 * DynamoDB as data store

#### Setup the project
1. Install serverless cli `npm install -g serverless`
1. Clone this repo, and `cd` into this repo
1. Install node packages: `npm install`
1. Create a Python virtual environment: `python3 -m venv env`
1. Activate the Python virtual environment: `source env/bin/activate`
1. Install Python packages: `pip install -r requirements.txt`

#### Run the project locally
1. Make sure you have docker `docker pull lambci/lambda`
1. Install local `sls dynamodb install`
1. `sls dynamodb start -p 8000  --migrate true`
1. `sls offline`

#### Deploy this project
To deploy this project, you need to:
1. Create a AWS credentials. Full guide [here](https://serverless.com/framework/docs/providers/aws/guide/credentials/), quick summary below:
    - Sign up for an AWS account [here](https://aws.amazon.com/)
    - Create an user and access key at the [Identity and access management (IAM) dashboard](https://console.aws.amazon.com/iam/home?region=us-east-1#/users)
    - Get the access key ID and secret access key
    - Export the keys by running the following command in your terminal:
    ```$xslt
    export AWS_ACCESS_KEY_ID=<your-key-here>
    export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>
    ```
1. Run `serverless deploy` to deploy backend changes
1. Run `serverless client deploy` to deploy frontend changes
1. Log in to your AWS API gateway console. In API -> dev-lighting-talk -> Stages -> dev, You should be able to see you site live and deployed! For example, https://kibdbgkt76.execute-api.us-east-1.amazonaws.com/dev/. Currently it needs a slash(so ....amazonaws.com/dev/) at the end for path to work correctly.

### Project structure

    .
    ├── client                  # All the frontend code goes here
    │   └── dist                # The "built folder" for frontend code.
    ├── lightningtalk           # Lambda code
    ├── package.json            # node package.json
    ├── serverless.yml          # Serverless framework configurations. Extra cloudformation configs are here too
    └── README.md
