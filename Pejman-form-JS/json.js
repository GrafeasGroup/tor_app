var templates = {
	"footer": "^^I'm&#32;a&#32;human&#32;volunteer&#32;content&#32;transcriber&#32;for&#32;Reddit!&#32;[If&#32;&#32;you'd&#32;like&#32;more&#32;information&#32;on&#32;what&#32;we&#32;do&#32;and&#32;why&#32;we&#32;do&#32;it,&#32;click&#32;here!](https://www.reddit.com/r/TranscribersOfReddit/wiki/index)",
	"types": [
		{
			"label": "Art and Images without Text",
			"content": {
				"header": "*Image Transcription:*",
				"elements": [
					{
						"description": "Description of the image: ",
						"type": "textarea",
						"prefix": "\n\n[*",
						"suffix": "*]",
						"placeholder": "Description of Image",
					}
				]
			}
		},
		{
			"label": "Images with Text",
			"content": {
				"header": "*Image Transcription:*",
				"elements": [
					{
						"description": "Description of the image:",
						"type": "textarea",
						"prefix": "\n\n[*",
						"suffix": "*]",
						"placeholder": "Description of anything that you think may be worth describing about the image itself aside from what the text says. For example, an unusual text font, background images or color, etc."
					},
					{
						"description": "Description of the text:",
						"type": "textarea",
						"prefix": "\n\n",
						"placeholder": "Text of post"
					}
				]
			}
		},
		{
			"label": "Image Transcription: 4chan",
			"content": {
				"header": "*Image Transcription: 4chan*",
				"elements": [
					{
						"description": "Username:",
						"type": "input",
						"prefix": "\n\n**",
						"suffix": "**",
						"value": "Anon"
					},
					{
						"description": "Timestamp (MM/DD/YYYY, hh:mm):",
						"prefix": " ",
						"type": "input"
					},
					{
						"description": "Plaintext/Greentext",
						"type": "textarea",
						"prefix": "\n\n",
						"value": "Plaintext. \n\n> Greentext."
					}
				]
			}
		},
		{
			"label": "Reddit posts & comments",
			"content": {
				"header": "*Image Transcription: Reddit*",
				"elements": [
					{
						"description": "Post title:",
						"type": "input",
						"prefix": "\n\n**",
						"suffix": "**",
						"placeholder": "Post title"
					},
					{
						"description": "Karma Points:",
						"type": "input",
						"prefix": ", ",
						"placeholder": "Only numbers",
					},
					{
						"description": "Submitted by (\\/u/Redditor):",
						"type": "input",
						"prefix": " points, submitted by **",
						"suffix": "**",
						"value": "\\/u/Redditor",
					},
					{
						"description": "Subreddit (\\/r/Subreddit):",
						"type": "input",
						"prefix": " to **",
						"suffix": "**",
						"value": "\\/r/Subreddit",
					},
					{
						"description": "Gilded x#:",
						"type": "input",
						"prefix": ", Gilded ",
						"placeholder": "Number of gold received, if none then type 0",
					},
					{
						"description": "Description of image:",
						"type": "textarea",
						"placeholder": "Description of anything that you think may be worth describing about the image itself aside from what the text says. For example, an unusual text font, background images or color, etc",
						"prefix": "\n\n[*",
						"suffix": "*]"
					},
					{
						"description": "Description of the text:",
						"type": "textarea",
						"prefix": "\n\n",
						"placeholder": "Text.",
					}
					
				]
			}
		},
		{
			"label": "Reddit post with reports",
			"content": {
				"header": "*Image Transcription: Reddit*",
				"elements": [
					{
						"description": "\\/u/Commenting Redditor:",
						"type": "input",
						"prefix": "\n\n> **",
						"suffix": "**",
						"value": "\\/u/Redditor"
					},
					{
						"description": "Karma score:",
						"type": "input",
						"prefix": ", karma: ",
						"placeholder": "Only numbers"
					},
					{
						"description": "Description of the text:",
						"type": "textarea",
						"prefix": "\n\n> ",
						"placeholder": "Text of post"
					},
					{
						"description": "Total number of reports:",
						"type": "input",
						"prefix": "\n\n>> **User Reports: ",
						"suffix": "**",
						"placeholder": "Only numbers" //TODO: Restrict input to only numbers
					},
					{
						"description": "Report Reason:",
						"type": "textarea",
						"prefix": "\n\n",
						"value": ">> Times reported: report reason A \n\n>> Times reported: report reason B \n\n>> etc."
					}
				]
			}

		},
		{
			"label": "Facebook Post",
			"content": {
				"header": "*Image Transcription: Facebook Post*",
				"elements": [
					{
						"description": "Name of Poster:",
						"type": "input",
						"prefix": "\n\n**",
						"suffix": "**"
					},
					{
						"description": "Description of images:",
						"type": "textarea",
						"prefix": "\n\n[*",
						"suffix": "*]",
						"placeholder": "Description of anything that you think may be worth describing about the images itself aside from what the text says. For example, an unusual text font, background images or color, etc."
					},
					{
						"description": "Description of the text:",
						"type": "textarea",
						"prefix": "\n\n",
						"placeholder": "Text of post"
					}
				]
			}
		},
		{
			"label": "Facebook Comments or replies",
			"content": {
				"header": "*Image Transcription: Facebook Comments*",
				"elements": [
					{
						"description": "Name:",
						"type": "input",
						"prefix": "\n\n**",
						"suffix": "**"
					},
					{
						"description": "Description of images:",
						"type": "textarea",
						"prefix": "[*",
						"suffix": "*]",
						"placeholder": "Description of Images, if any"
					},
					{
						"description": "Description of the text:",
						"type": "textarea",
						"placeholder": "Text of post"
					}
				]
			}
		},
		{
			"label": "Twitter Post",
			"content": {
				"header": "*Image Transcription: Twitter Post*",
				"elements": [
					{
						"description": "Name of Poster:",
						"type": "input",
						"prefix": "\n\n**",
						"suffix": "**"
					},
					{
						"description": "Twitter handle:",
						"type": "input",
						"prefix": ", ",
						"value": "@"
					},
					{
						"description": "Description of images:",
						"type": "textarea",
						"prefix": "[*",
						"suffix": "*]",
						"placeholder": "Description of Images, if any"
					},
					{
						"description": "Description of the text:",
						"type": "textarea",
						"placeholder": "Text of post"
					}
				]
			}
		},
		{
			"label": "Twitter Replies",
			"content": {
				"header": "*Image Transcription: Twitter Post*",
				"elements": [
					{
						"description": "Name of replier:",
						"type": "input",
						"prefix": "\n\n> Reply: **",
						"suffix": "**"
					},
					{
						"description": "Twitter handle:",
						"type": "input",
						"prefix": ", ",
						"value": "@"
					},
					{
						"description": "Description of images:",
						"type": "textarea",
						"prefix": "[*",
						"suffix": "*]",
						"placeholder": "Description of Images, if any"
					},
					{
						"description": "Description of the text:",
						"type": "textarea",
						"placeholder": "Text of post"
					}
				]
			}
		},
		{
			"label": "Comics",
			"content": {
				"header": "*Image Transcription: Comic*",
				"elements": [
					{
						"description": "Panel descriptions:",
						"type": "textarea",
						"prefix": "\n\n",
						"value": "**Panel Number** \n\n [*Description of the scene.*] \n\n **Character:** Text. \n\n --- \n\n Next Panel"
					}
				]
			}
		},
		{
			"label": "Gifs",
			"content": {
				"header": "*Image Transcription: GIF*",
				"elements": [
					{
						"description": "Description of Gif:",
						"type": "textarea",
						"prefix": "\n\n",
						"value": "[*Description of anything that you think may be worth describing about the image itself aside from what the text says. For example, an unusual text font, background images or color, etc*] \n\nText. \n\n--- \n\nRepeat for each \"scene\" of the gif."
					}
				]
			}
		},
		{
			"label": "Text Messages",
			"content": {
				"header": "*Image Transcription: Text Messages*",
				"elements": [
					{
						"description": "Description of text messages:",
						"type": "textarea",
						"prefix": "\n\n",
						"value": "[*Description of images, if any.*]\n\n**Name of Poster1**: Text of post.\n\n**Name of Poster2**: Text of post."
					}
				]
			}
		},
		{
			"label": "Code",
			"content": {
				"header": "*Image Transcription: Code*",
				"elements": [
					{
						"description": "Code:",
						"type": "textarea",
						"prefix": "\n\n",
						"value": "(four spaces) code"
					}
				]
			}
		},
		{
			"label": "Memes",
			"content": {
				"header": "*Image Transcription: Meme*",
				"elements": [
					{
						"description": "Name of Meme:",
						"type": "input",
						"prefix": "\n\n[*",
						"suffix": "*]",
						"placeholder": "Name of Meme (and description of any unusual features added, if any.)"
					},
					{
						"description": "Top Text:",
						"type": "input",
						"prefix": "\n\n#"
					},
					{
						"description": "Bottom Text:",
						"type": "input",
						"prefix": "\n\n#"
					}
				]
			}
		},
		{
			"label": "Others",
			"content": {
				"header": "*Image Transcription: Source Name*",
				"elements": [
					{
						"description": "Text:",
						"type": "textarea",
						"prefix": "\n\n",
						"value": "Please generate the text and change the Image Transcription: header manually.\n\n[*Description of images, if any.*]\n\n**Name of Poster**: Text of post."
					}
				]
			}
		}

	]
}
