import React from "react";
import Layout from "../component/layout/Layout";

function IsLogedoutSkeleton() {
  return (
    <>
      <Layout>
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            How do I create an account?
          </div>
          <div className="collapse-content text-sm">
            Click the "Profile" button in the top right corner and follow the
            registration process.Register, Verify then Login and enjoy with us.
          </div>
        </div>
        <div
          tabIndex={0}
          className="collapse collapse-arrow bg-base-100 border-base-300 border"
        >
          <div className="collapse-title font-semibold">
            How do I Add & See Task?
          </div>
          <div className="collapse-content text-sm">
            Click the "Profile" button in the top right corner and Login.
          </div>
        </div>
      </Layout>
    </>
  );
}

export default IsLogedoutSkeleton;
