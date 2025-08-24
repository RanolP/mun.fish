import SchemaBuilder from '@pothos/core'
import SimpleObjectsPlugin from '@pothos/plugin-simple-objects'

const builder = new SchemaBuilder({
  plugins: [SimpleObjectsPlugin]
})

builder.queryType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string({ defaultValue: 'World' })
      },
      resolve: (_, { name }) => `Hello, ${name}!`
    })
  })
})

export const schema = builder.toSchema()