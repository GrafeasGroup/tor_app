import cherrypy
import praw

from tor_web.main.helper.helper import submission_from_link, \
    get_ocr_from_tor_post
from tor_web.main.manage_tor_post import claim_tor_post, done_tor_post
from tor_web.main.new_tor_posts import latest_uf_tor


r = praw.Reddit('main', user_agent="TorWeb - Finds ToR posts and claims them "
                                   "and stuff. Hi dev!")


class TorWeb(object):
    @cherrypy.expose()
    @cherrypy.tools.json_out()
    def new_posts(self):
        latest = latest_uf_tor(r)

        result = []

        for post in latest:
            result.append({
                'postTitle': post.title,
                'postId': post.id,
                'postUrl': post.url,
                'postPostUrl': submission_from_link(post, r).url,
                'postFlair': post.link_flair_text,
                'postThumbnailLink': submission_from_link(post, r).thumbnail,
                'postOCR': get_ocr_from_tor_post(post, r)
            })

        return result

    @cherrypy.expose()
    @cherrypy.tools.json_in()
    def claim_post(self):
        post_id = cherrypy.request.json['postId']

        submission = r.submission(post_id)

        return claim_tor_post(submission)

    @cherrypy.expose()
    @cherrypy.tools.json_in()
    def done_post(self):
        post_id = cherrypy.request.json['postId']

        submission = r.submission(post_id)
        cherrypy.log('what')
        return done_tor_post(submission, r)


if __name__ == '__main__':
    cherrypy.quickstart(TorWeb(), '/api')
