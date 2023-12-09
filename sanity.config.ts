import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'my-blog-nextjs',

  projectId: 'q8rimqp9',
  dataset: 'production',

  basePath:"/studio",

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
