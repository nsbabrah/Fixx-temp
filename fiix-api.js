
var fiixCmmsClient = new fiixCmmsClient();
fiixCmmsClient.setBaseUri( 'https://raspberry.masandbox.com/api/' );
fiixCmmsClient.setAppKey('macmmsackp384040a2a90e5302d927a02377c0c25ff09be64d42531d834d688');
fiixCmmsClient.setAuthToken('macmmsaakp384dcdab6d977264ceb04644784c3eefe111c79358d34d94d860b3e');
fiixCmmsClient.setPKey('macmmsaskp384f1b2808e6d8d94b23017e5e55d0753bb9c24e83b42cbe0f0c21468aa60f8fb0f');



// RPC call to Ping with simple callback
fiixCmmsClient.rpc({
  "name": "Ping",
  "callback": function(ret) {
    if (!ret.error) {
      output("You have successfully made your first call to the API.");
    } else output(ret.error);
  }
});
