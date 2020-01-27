module.exports.home = (req,res,next)=>{
    var paths = ['images/file1.jpg','images/file2.jpg','images/file3.jpg'];              
    res.render('gallery', { imgs: paths, layout:false});
  };