// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CurrentOffersModel } = initSchema(schema);

export {
  CurrentOffersModel
};