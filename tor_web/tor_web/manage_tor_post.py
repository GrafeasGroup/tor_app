def claim_tor_post(post):
    if post.link_flair_text == 'Unclaimed':
        post.reply('claim')
        return 'yay'
    else:
        return 'err'


def done_tor_post(post):
    if post.link_flair_text == 'In Progress':
        might_be_by_me = False
        for comment in post.comments:
            if comment.author == 'jabbathehutt1234':
                might_be_by_me = True

        if might_be_by_me:
            post.reply('done')
