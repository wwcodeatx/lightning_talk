import json
import logging
import os
import time
import uuid
from datetime import datetime

import boto3
dynamodb = boto3.resource('dynamodb')


def handler(event, context):
    data = json.loads(event['body'])

    timestamp = str(datetime.utcnow().timestamp())

    table = dynamodb.Table(os.environ['DYNAMODB_TABLE'])

    item = {
        'id': str(uuid.uuid1()),
        'title': data['title'],
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