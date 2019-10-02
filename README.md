# Women Who Code Austin Lightning Talk App

Women Who Code Austin Network hosts lightning talk every first Monday of the month. You can sign up to attend, or talk [here](https://www.meetup.com/Women-Who-Code-Austin/events/)!

Currently talk sign-ups are through Google form, and organizers have to manually create forms for each month. The minimal viable product(MVP) for this project is to automatically direct sign-ups to the correct month.

### To run the project
The project is currently using:
 * HTML, CSS and vanilla javascript front-end
 * [Serverless](https://serverless.com/) architecture back-end, with AWS lambda in Python
 * DynamoDb as data store 

To run this project, you need to:
1. Install serverless cli `npm install -g serverless`
2. Create a AWS credentials. Full guide [here](https://serverless.com/framework/docs/providers/aws/guide/credentials/), quick summary below: 
    - Sign up for an AWS account [here](https://aws.amazon.com/)
    - Create an user and access key at the [Identity and access management (IAM) dashboard](https://console.aws.amazon.com/iam/home?region=us-east-1#/users)
    - Get the access key ID and secret access key
    - Export the keys by running the following command in your terminal:
    ```$xslt
    export AWS_ACCESS_KEY_ID=<your-key-here>
    export AWS_SECRET_ACCESS_KEY=<your-secret-key-here>
    ```
3. Clone this repo, and `cd` into this repo
4. Run `npm install`
5. Run `serverless deploy`
6. Log in to your AWS API gateway console. In API -> dev-lighting-talk -> Stages -> dev, You should be able to see you site live and deployed! Currently it only route to `/index.html`

### Project structure


### A typical top-level directory layout

    .
    ├── client                  # All the frontend code goes here
    │   └── dist                # The "built folder" for frontend code. 
    ├── lightningtalk           # Lambda code
    ├── package.json            # node package.json
    ├── serverless.yml          # Serverless framework configurations. Extra cloudformation configs are here too
    └── README.md

To deploy:
`serverless deploy`

To deploy front end
`serverless client deploy` then press y.