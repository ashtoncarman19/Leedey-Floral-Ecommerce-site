import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import banner from './banner';
import flower from './flower'
import sympathy from '../../sanity-leedey-floral-gifts/schemas/sympathy';
import custom from '../../sanity-leedey-floral-gifts/schemas/custom';
import birthday from '../../sanity-leedey-floral-gifts/schemas/birthday';
import anniversary from '../../sanity-leedey-floral-gifts/schemas/anniversary';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([ product, banner, flower,
    sympathy, custom, birthday, anniversary ]),
})