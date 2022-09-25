import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import product from './product'
import banner from './banner'
import flower from './flower'
import sympathy from './sympathy'
import custom from './custom'
import birthday from './birthday'
import anniversary from './anniversary'

export default createSchema({
  name: 'default',

  types: schemaTypes.concat([ product, banner, flower,
     sympathy, custom, birthday, anniversary
  ]),
})
