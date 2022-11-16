import requests
import pprint

BASE_URL = 'https://api.themoviedb.org/3'
path = '/movie/top_rated'
params = {
    'api_key': '',
    'language': 'ko',
    'page': '1',
}
response = requests.get(BASE_URL + path, params=params)

pprint.pprint(response.json().get('results'))
