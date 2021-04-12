const Home = {
    ActiveTables: 10,
    Tables:10,
    Parcels: 9,
    Kitchens: 10,
    Waiters: 14,
    Billers: 10,
    // Customers: 30,
  };
const homepagedata = (req,res) => {
res.send(Home);
}
module.exports = homepagedata;