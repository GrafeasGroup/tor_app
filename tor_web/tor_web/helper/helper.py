def submission_from_link(post, r):
    return r.submission(url=post.url)


def get_ocr_from_tor_post(post, r):
    comments = post.comments
    results = []

    for comment in comments:
        if comment.author == 'transcribot':
            # first ocr reply
            replies = comment.replies
            for reply in replies:
                if reply.author == 'transcribot':
                    results.append(reply.body)
                    # FIXME: doesn't get longer OCR replies

    return '\n\n'.join(results)
