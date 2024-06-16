import jwt, datetime
from rest_framework import exceptions
# from datetime import timezone

def create_access_token(id):
    return jwt.encode({
        'user_id': id,
        'exp': datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(seconds=30),
        'iat': datetime.datetime.now(datetime.timezone.utc)
    }, 'access_secret', algorithm='HS256')

def decode_access_token(token):
    try:
        payload = jwt.decode(token, 'access_secret', algorithms='HS256')
        return payload['user_id']
    except:
        raise exceptions.AuthenticationFailed('unauthenticated')

def create_refresh_token(id):
    return jwt.encode({
        'user_id': id,
        'exp': datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(days=7),
        'iat': datetime.datetime.now(datetime.timezone.utc)
    }, 'refresh_secret', algorithm='HS256')