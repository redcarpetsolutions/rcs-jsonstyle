var provider = "Red Carpet Solutions";

module.exports.setProvider = (providername) => {
    provider = providername;
}


module.exports.json = (res, data) => {
    res.set('Content-Type', 'application/json');
    res.status(200).send({
        "data": data,
        "status": 200,
        "provider": provider
    });
}


module.exports.created = (res, msg) => {
    res.set('Content-Type', 'application/json');
    res.status(201).send({
        "success": {
            "message": msg
        },
        "status": 201,
        "provider": provider
    });
}

module.exports.accepted = (res, msg) => {
    res.set('Content-Type', 'application/json');
    res.status(202).send({
        "success": {
            "message": msg
        },
        "status": 202,
        "provider": provider
    });
}

module.exports.error = (res, err) => {
    if(!err){
        err = "An Error has Occured, Please try again";
    }
    res.set('Content-Type', 'application/json');
    res.status(500).send({
        "error": {
            "message": err
        },
        "status": 500,
        "provider": provider
    });
}

module.exports.unauthorized = (res, msg) => {
    if(!msg){
        msg = "You are not Authorized to access this content";
    }
    res.set('Content-Type', 'application/json');
    res.status(401).send({
        "error": {
            "message": msg
        },
        "status": 401,
        "provider": provider
    });
}

module.exports.badRequest = (res, msg) => {
    if(!msg){
        msg = "The Information you provided is incomplete";
    }
    res.set('Content-Type', 'application/json');
    res.status(400).send({
        "error": {
            "message": msg
        },
        "status": 400,
        "provider": provider
    });
}