
export const account = {
    'admin': {
        authority: '*'
    },
    'admin1': {
        authority: [
            {
                path: 'home',
              },
              {
                path: 'tabls',
              },
              {
                path: 'components',
                children: [
                  {
                    path: 'copy',
                  },
                  {
                    path: 'container',
                  },
                  {
                    path: 'dragula',
                  },
                  {
                    path: 'crop',
                  },
                ]
              },
              {
                path: 'rich-text',
                children: [
                  {
                    path: 'ckeditor',
                    name: 'ckeditor',
                  },
                  {
                    path: 'md',
                    name: 'md',
                  },
                ]
              },
              {
                path: 'chart',
                children: [
                  {
                    path: 'polyline',
                  },
                ]
              },
              {
                path: 'routing-authority',
                name: 'routing-authority',
              },
              {
                path: 'github',
              },
              {
                path: 'logs',
              },
              {
                path: 'about',
              },
        ]
    }, 
    getRoute(username: string) {
        return this[username as 'admin']
    }
};

export const getRoute = (username: string) => {
    return new Promise(resolve => {
        resolve(account[username as 'admin'])
    })
}