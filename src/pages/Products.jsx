import React from "react";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>this is product page</h1>
      <Link to="/">Returning to dashboard</Link>
    </div>
  );
}

export default Products;
