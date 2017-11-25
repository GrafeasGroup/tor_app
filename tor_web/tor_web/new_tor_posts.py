def latest_uf_tor(r):
    tor = r.subreddit('TranscribersOfReddit')

    unclaimed_submissions = []

    for submission in tor.new(limit=2):
        if submission.link_flair_text == 'Unclaimed':
            unclaimed_submissions.append(submission)

    return unclaimed_submissions
