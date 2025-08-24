import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { schema } from './schema.js'

const yoga = createYoga({
  schema,
  landingPage: true,
  graphqlEndpoint: '/graphql'
})

const server = createServer(yoga)

const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/graphql`)
})