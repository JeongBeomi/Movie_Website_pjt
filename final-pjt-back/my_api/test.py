import requests
import pprint

BASE_URL = 'https://api.themoviedb.org/3'
path = '/movie/top_rated'
params = {
    'api_key': '6551ae074d5853c4b815a88eab19bfda',
    'language': 'ko',
    'page': '1',
}
response = requests.get(BASE_URL + path, params=params)

pprint.pprint(response.json().get('results'))
