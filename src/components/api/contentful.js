const contentful = require('contentful');

const client = contentful.createClient({
  space: 'g05jvjucbqus',
  accessToken:
    'b9ed499b0af879098089e0d1c232a34d3798fb1374d2a9f2e4fcb29227b7d0f3'
});

export default client;
