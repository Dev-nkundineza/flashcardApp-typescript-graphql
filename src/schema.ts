import { makeSchema } from 'nexus'
import { join } from 'path'
import * as types from './graphql/flashCard'
import * as usertypes from './graphql/user'

export const schema = makeSchema({
  types : [usertypes, types], 
  outputs: {
    schema: join(process.cwd(), "schema.graphql"), 
    typegen: join(process.cwd(), "nexus-typegen.ts"), 
  },
})