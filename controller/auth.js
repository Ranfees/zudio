exports.home = (req,res)=>{
    console.log(req.params)
    return res.render('home')
}

exports.ethinic = (req,res)=>{
    return res.render('ethinic')
}

exports.men = (req,res)=>{
    return res.render('men')
}

exports.women = (req,res)=>{
    return res.render('women')
}

exports.footwear = (req,res)=>{
    return res.render('footwear')
}

exports.loungewear = (req, res) => {
    return res.render('loungewear');
};


exports.gift = (req,res)=>{
    return res.render('gift')
}

exports.zworld = (req,res)=>{
    return res.render('zworld')
}

exports.zstories = (req,res)=>{
    return res.render('zstories')
}

exports.zudioNear = (req,res)=>{
    return res.render('zudioNear')
}
