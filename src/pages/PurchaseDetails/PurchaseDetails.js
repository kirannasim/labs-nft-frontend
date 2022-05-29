import React from "react";
import Topbar from "../../components/Topbar";
import PurchaseDetailsContent from "../../components/PurchaseDetailsContent";
import "../../assets/scss/purchaseDetails/purchaseDetails.scss";

const PurchaseDetails = () => {
  return (
    <div className="purchase-detail-page">
      <Topbar loginStatus={true} />
      <PurchaseDetailsContent />
    </div>
  );
};

export default PurchaseDetails;
