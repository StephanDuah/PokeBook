import React, { Suspense } from "react";
import Navbar from "../Components/ListViewComponents/Topbar/Navbar";
import Collections from "../Components/ListViewComponents/CollectionsList";

const ListView = () => {
  return (
    <section>
      <Navbar />
      <div className="w-full bg-[#F6F6F6] min-h-screen p-16 pink">
        <Suspense fallback={<div>Loading Collections</div>}>
          <Collections />
        </Suspense>
      </div>
    </section>
  );
};

export default ListView;
