var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'prod',
        repo: 'https://github.com/EmilNilsson12/svelte-projekt', 
        user: {
            name: 'Emil Nilsson', // update to use your name
            email: '52598265+EmilNilsson12@users.noreply.github.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)