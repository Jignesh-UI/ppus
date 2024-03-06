import React, { useState } from "react";
import {
  Bar2Collection,
  CurrentOffersModelCreateForm,
} from "../../../ui-components";
import { useNavigate } from "react-router-dom";

const CurrentOffersComponent = () => {
  const [showOffers, setShowOffers] = useState(false);
  const navigate = useNavigate();
  const createData = async () => {
    setShowOffers(true);
  };

  const backtoAdmin = async () => {
    navigate("/admin");
  };

  const closeModal = async () => {
    setShowOffers(false);
  };

  return (
    <div className="dashboard">
      <div className="bgImage">
        <button className="btnaddNew" onClick={backtoAdmin}>
          Back to Admin Page.
        </button>

        <hr />

        <button className="btnaddNew" onClick={createData}>
          Add New Offerings
        </button>

        {showOffers && (
          <>
            <div className="modalBG"></div>
            <div className="modal">
              <button type="button" onClick={closeModal} className="btnClose">
                X
              </button>
              {/* <CurrentOffersModelCreateForm /> */}
              <CurrentOffersModelCreateForm
                onSubmit={(fields) => {
                  // Example function to trim all string inputs
                  const updatedFields = {};
                  Object.keys(fields).forEach((key) => {
                    if (typeof fields[key] === "string") {
                      updatedFields[key] = fields[key].trim();
                    } else {
                      updatedFields[key] = fields[key];
                    }
                  });
                  setShowOffers(false);

                  return updatedFields;
                }}
              />
            </div>
          </>
        )}
        <hr />

        <h2>Current Offers</h2>
        <Bar2Collection
          isPaginated={false}
          overrideItems={({ item, index }) => ({
            overrides: {
              closeBar: {
                style: {
                  cursor: "pointer",
                },
              },
            },
          })}
        />
      </div>
    </div>
  );
};

export default CurrentOffersComponent;
