import json
import logging
import os
import time
import uuid
from datetime import datetime

import boto3


def handler(event, context):
    if event.get('requestContext').get('accountId') == 'offlineContext_accountId':
        print("local development")
        dynamodb = boto3.resource('dynamodb', endpoint_url='http://localhost:8000')
    else:
        dynamodb = boto3.resource('dynamodb')

    data = json.loads(event['body'])
    timestamp = str(datetime.utcnow().timestamp())
    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])

    item = {
        'id': str(uuid.uuid1()),
        'talk_date': data.get('talk_date'),
        'title': data.get('title'),
        'speaker_name': data.get('speaker_name'),
        'twitter_handle': data.get('twitter_handle'),
        'created_at': timestamp,
    }

    # write the todo to the database
    table.put_item(Item=item)

    # create a response
    response = {
        "statusCode": 200,
        "body": json.dumps(item)
    }

    return response