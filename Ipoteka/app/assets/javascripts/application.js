var calculator = (function() {
    var module = {};

    function getBaseLog(x, y) {
        return Math.log(y) / Math.log(x);
    };

    module.getPayment = function(sum, period, rate) {
        var i,
            koef,
            result;

        i = (rate / 12) / 100;

        koef = (i * (Math.pow(1 + i, period * 12))) / (Math.pow(1 + i, period * 12) - 1);

        result = sum * koef;

        return result.toFixed();
    };

    module.getPeriod = function(sum, plat, rate) {
        var mm,
            i,
            result;

        i = (rate / 12) / 100;
        mm = plat / sum;
        result = getBaseLog(1 + i, -mm / (i - mm));

        return Math.ceil(+result);
    };

    return module;
})();
