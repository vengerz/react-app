import React from "react";
import ClientComponent from "../components/ClientComponent";
import TitleComponent from "../components/TitleComponent";

function ClientPage() {
  const title1 = "Member";
  return (
    <>
      <TitleComponent data={title1} />
      <ClientComponent />
    </>
  );
}

export default ClientPage;
