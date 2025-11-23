exports.home = (req,res)=>{
    console.log(req.params)
    return res.render('home')
}

exports.ethinic = (req,res)=>{
    return res.render('collections/ethinic')
}

exports.men = (req,res)=>{
    return res.render('collections/men')
}

exports.women = (req,res)=>{
    return res.render('collections/women')
}

exports.footwear = (req,res)=>{
    return res.render('collections/footwear')
}

exports.loungewear = (req, res) => {
    return res.render('collections/loungewear');
};


exports.gift = (req,res)=>{
    return res.render('navbar-items/gift')
}

exports.zworld = (req,res)=>{
    return res.render('navbar-items/zworld')
}

exports.zstories = (req,res)=>{
    return res.render('navbar-items/zstories')
}

exports.zudioNear = (req,res)=>{
    return res.render('navbar-items/zudioNear')
}
