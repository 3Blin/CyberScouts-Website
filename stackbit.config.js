import { defineStackbitConfig } from '@stackbit/types';
import { GitContentSource } from '@stackbit/cms-git';

export default defineStackbitConfig({
  stackbitVersion: '~0.6.0',
  contentSources: [
    new GitContentSource({
      rootPath: __dirname,
      contentDirs: ['content'],
      models: [
        {
          name: 'Page',
          type: 'page',
          urlPath: '/{slug}',
          filePath: 'content/pages/{slug}.json',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'content', type: 'markdown', required: true },
            { name: 'image', type: 'image' }
          ]
        },
        {
          name: 'Kurs',
          type: 'page',
          urlPath: '/kurse/{slug}',
          filePath: 'content/kurse/{slug}.json',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'description', type: 'markdown' },
            { name: 'price', type: 'number' },
            { name: 'date', type: 'date' },
            { name: 'image', type: 'image' },
            { name: 'content', type: 'markdown' }
          ]
        },
        {
          name: 'Event',
          type: 'page',
          urlPath: '/events/{slug}',
          filePath: 'content/events/{slug}.json',
          fields: [
            { name: 'title', type: 'string', required: true },
            { name: 'description', type: 'markdown' },
            { name: 'date', type: 'date' },
            { name: 'location', type: 'string' },
            { name: 'image', type: 'image' },
            { name: 'content', type: 'markdown' }
          ]
        }
      ]
    })
  ]
});
