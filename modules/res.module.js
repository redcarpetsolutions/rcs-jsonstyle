var provider = "Red Carpet Solutions";
var defaultWarnings = [];

module.exports.setProvider = (providername) => {
    provider = providername;
}
module.exports.setWarnings = (warnings) => {
    defaultWarnings = warnings;
}

module.exports.json = (res, data, warnings) => {
    res.set('Content-Type', 'application/json');
    if (!warnings) {
        warnings = defaultWarnings;
    }
    res.status(200).send({
        "data": data,
        "status": 200,
        "provider": provider
    });
}


module.exports.created = (res, data, warnings) => {
    res.set('Content-Type', 'application/json');
    if (!warnings) {
        warnings = defaultWarnings;
    }
    res.status(201).send({
        "data": data,
        "warnings": warnings,
        "status": 201,
        "provider": provider
    });
}

module.exports.accepted = (res, data, warnings) => {
    res.set('Content-Type', 'application/json');
    if (!warnings) {
        warnings = defaultWarnings;
    }
    res.status(202).send({
        "data": data,
        "warnings": warnings,
        "status": 202,
        "provider": provider
    });
}

module.exports.error = (res, err, warnings) => {
    if (!err) {
        err = "An Error has Occured, Please try again";
    }
    res.set('Content-Type', 'application/json');
    if (!warnings) {
        warnings = defaultWarnings;
    }
    res.status(500).send({
        "errors": err,
        "warnings": warnings,
        "status": 500,
        "provider": provider
    });
}

module.exports.unauthorized = (res, err, warnings) => {
    if (!err) {
        err = "You are not Authorized to access this content";
    }
    res.set('Content-Type', 'application/json');
    if (!warnings) {
        warnings = defaultWarnings;
    }
    res.status(401).send({
        "errors": err,
        "warnings": warnings,
        "status": 401,
        "provider": provider
    });
}

module.exports.badRequest = (res, err, warnings) => {
    if (!err) {
        err = "The Information you provided is incomplete";
    }
    res.set('Content-Type', 'application/json');
    if (!warnings) {
        warnings = defaultWarnings;
    }
    res.status(400).send({
        "errors": err,
        "warnings": warnings,
        "status": 400,
        "provider": provider
    });
}