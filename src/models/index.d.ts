import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCurrentOffersModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CurrentOffersModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imagepath: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCurrentOffersModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CurrentOffersModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly imagepath: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CurrentOffersModel = LazyLoading extends LazyLoadingDisabled ? EagerCurrentOffersModel : LazyCurrentOffersModel

export declare const CurrentOffersModel: (new (init: ModelInit<CurrentOffersModel>) => CurrentOffersModel) & {
  copyOf(source: CurrentOffersModel, mutator: (draft: MutableModel<CurrentOffersModel>) => MutableModel<CurrentOffersModel> | void): CurrentOffersModel;
}