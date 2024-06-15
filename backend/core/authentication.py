import jwt, datetime
# from datetime import timezone

def create_access_token(id):
    return jwt.encode({
        'user_id': id,
        'exp': datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(seconds=30),
        'iat': datetime.datetime.now(datetime.timezone.utc)
    }, 'access_secret', algorithm='HS256')

def create_refresh_token(id):
    return jwt.encode({
        'user_id': id,
        'exp': datetime.datetime.now(datetime.timezone.utc) + datetime.timedelta(days=7),
        'iat': datetime.datetime.now(datetime.timezone.utc)
    }, 'refresh_secret', algorithm='HS256')