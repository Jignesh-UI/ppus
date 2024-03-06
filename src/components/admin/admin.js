import React from "react";
import "./admin.css";
import { useNavigate } from "react-router-dom";

const AdministratorComponent = () => {
    const navigate = useNavigate();

  const createData = async () => {
    console.log(1);
    navigate("/currentOffers");
  };

  return (
    <div className="dashboard">
      <div className="bgImage">
        <h1>Welcome Admin!</h1>
        <table className="myTable">
          <tbody>
            <tr>
              <td>Current Offerings</td>
              <td>
                <div>
                  <button className="btnaddNew" type="button" onClick={createData}>Add New/Manage Offerings</button>
                </div>
              </td>
            </tr>
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdministratorComponent;
