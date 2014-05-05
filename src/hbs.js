define(['curl/plugin/_fetchText', './Advisor'], function (fetchText, Advisor) {
    var deviceTypeFileExtension = Advisor.getDeviceType()? '.' + Advisor.getDeviceType() + '.hbs': '.hbs';

    function error (ex) {
        throw ex;
    }

    return {
        load: function (resourceName, req, callback, config) {
            fetchText(req.toUrl(resourceName + deviceTypeFileExtension), function(text) {
                req(['handlebars'], function(Handlebars) {
                    var result = Handlebars.compile(text);
                    callback(result);
                });
            }, callback.error || error);
        },
        cramPlugin: './hbs-cram'
    };
});
