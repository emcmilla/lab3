
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameToShow = "World";
  if(req.params.userName != null){
  nameToShow = req.params.userName;//URL PARAMS
  }
  res.render('index', {//RENDER TEMPLATE
  	'name': nameToShow,
  });
};
