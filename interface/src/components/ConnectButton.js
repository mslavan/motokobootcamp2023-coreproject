import React from "react";
import PlugConnect from '@psychedelic/plug-connect';

const ConnectButton = () => {

 if (!process.env.REACT_APP_DAO_CANISTER_ID) {
   console.error("Plug can't be load as missing REACT_APP_DAO_CANISTER_ID");
   return null;
 }
 return (
   <PlugConnect
     dark
     title="Login"
     onConnectCallback={() => console.log("Some callback")}
     host="host-example"
     whitelist={[process.env.REACT_APP_DAO_CANISTER_ID]}
   />
 );
}

export default ConnectButton;