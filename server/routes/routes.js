const Home = {"Tables": 10,"Parcels":9,"Kitchens": 10,"Waiters": 14,"Billers":10,"Customers":30};

const routes = (app) => {

    app.route('/homepagedata').get((req,res) => res.send(Home)).post((req, res) =>
    res.send('POST request successful!'));
     // create a new route so you can get these donation entries by their ID's
  app.route('/home/:homeID')
  //create put request
  .put((req, res) =>
  res.send('PUT request successful!'))
  //create delete request
  .delete((req, res) =>
  res.send('DELETE request successful'))

}

module.exports = routes;