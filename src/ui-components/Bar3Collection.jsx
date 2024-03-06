/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { CurrentOffersModel } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import Bar3 from "./Bar3";
import { Collection } from "@aws-amplify/ui-react";
export default function Bar3Collection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: CurrentOffersModel,
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
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={6}
      direction="column"
      alignItems="stretch"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "Bar3Collection")}
      {...rest}
    >
      {(item, index) => (
        <Bar3
          height="auto"
          width="auto"
          margin="0px 0px 0px 0px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></Bar3>
      )}
    </Collection>
  );
}
