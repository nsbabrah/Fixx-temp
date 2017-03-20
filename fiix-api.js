
var fiixCmmsClient = new fiixCmmsClient();
fiixCmmsClient.setBaseUri( 'https://raspberry.masandbox.com/api/' );
fiixCmmsClient.setAppKey('');
fiixCmmsClient.setAuthToken('');
fiixCmmsClient.setPKey('');



// RPC call to Ping with simple callback
fiixCmmsClient.rpc({
  "name": "Ping",
  "callback": function(ret) {
    if (!ret.error) {
      output("You have successfully made your first call to the API.");
    } else output(ret.error);
  }
});
