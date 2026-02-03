"use Client";
import Lnb from "./Lnb";
import Contents from "./Contents";

export default function Container({ children }) {      
  return (
    <div className="container">
      <Lnb />
      <Contents>{children}</Contents>
    </div>
  );
}