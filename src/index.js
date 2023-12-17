import React from "react";
import ReactDOM  from "react-dom";
import Head1 from "./head1/head1";
import Head2 from "./head2/head2";
import Head3 from "./head3/head3";
import Head4 from "./head4/head4";
import Head5 from "./head5/head5";



const root = 
ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <Head1/>
    <Head2/>
    <Head3/>
    <Head4/>
    <Head5/>
  </React.Fragment>
);
