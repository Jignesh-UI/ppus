/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { CurrentOffersModel } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import Bar2 from "./Bar2";
import { Collection } from "@aws-amplify/ui-react";
export default function Bar2Collection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = { sort: (s) => s.updatedAt(SortDirection.ASCENDING) };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: CurrentOffersModel,
    pagination: itemsPagination,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="grid"
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={3}
      templateColumns="1fr 1fr 1fr"
      autoFlow="row"
      alignItems="stretch"
      justifyContent="stretch"
      items={items || []}
      {...getOverrideProps(overrides, "Bar2Collection")}
      {...rest}
    >
      {(item, index) => (
        <Bar2
          currentOffersModel={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Bar2>
      )}
    </Collection>
  );
}
