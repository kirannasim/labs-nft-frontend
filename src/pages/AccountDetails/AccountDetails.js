import React from "react";
import Topbar from "../../components/Topbar";
import AccountEdit from "../../components/AccountEdit";
import Footer from "../../components/Footer";
// import "../../assets/scss/home/home.scss";
import "../../assets/scss/accountEdit/accountEdit.scss";

const AccountDetails = () => {
  return (
    <div className="account-edit-page">
      <Topbar loginStatus={true} />
      <AccountEdit />
      <Footer />
    </div>
  );
};

export default AccountDetails;
