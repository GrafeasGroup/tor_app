from typing import Dict
from typing import List

import requests


class API(object):

    def __init__(self, api_key):
        self.api_key = api_key
        self.url = 'http://localhost:8080'

    class actions(object):
        # post
        CLAIM = 'claim'
        DONE = 'done'
        UNCLAIM = 'unclaim'

        # keys
        CREATE = 'create'
        REVOKE = 'revoke'
        ME = 'me'

    def _call(self, path: str, json_data=None) -> Dict:
        if 'api_key' not in json_data:
            raise Exception('You need an API key in json_data!')

        return requests.post(
            self.url + path, json=json_data
        ).json()

    def post(self, action: str, post_id: str) -> Dict:
        # /claim
        # /done
        # /unclaim
        actions = {
            self.actions.CLAIM: '/claim',
            self.actions.DONE: '/done',
            self.actions.UNCLAIM: '/unclaim'
        }

        if action in actions:
            action_url = actions[action]
            return self._call(action_url, json_data={
                'api_key': self.api_key,
                'post_id': post_id,
                'debug': 0
            })
        else:
            raise Exception('Action type not supported.')

    def keys(self):
        # /keys/create
        # /keys/revoke
        # /keys/me
        pass

    def stats(self):
        # /
        pass

    def user(self):
        # /user
        pass
