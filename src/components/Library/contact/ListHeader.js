import React from "react";

function ListHeader(props) {
  return (
  <>
    <div class="listHeader">
      <h4 class="listHeader_Name">Name</h4>
      <h4 class="listHeader_Address">Address</h4>
      <h4 class="listHeader_phoneNumber">Phone Number</h4>
    </div>
  </>
  );
}

export default ListHeader;