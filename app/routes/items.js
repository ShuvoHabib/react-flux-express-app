export default function(app) {
  var items = [{
    name: "Computer"
  }, {
    name: "iMac"
  }, {
    name: "Football",
    purchased: "true"
  }, {
    name: "iPad"
  }];

  app.route('/api/items')
    .get((req,res)=>{
      res.send(items);
    })
}