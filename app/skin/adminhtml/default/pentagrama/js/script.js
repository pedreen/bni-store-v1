/*
* @Author: Warley Elias
* @Date:   2019-06-25 16:27:21
* @Last Modified by:   Warley Elias
* @Last Modified time: 2019-06-25 16:29:28
*/

Validation.add('validate-special-price', 'The Special Price is active only when lower than the Actual Price.', function(v) {
	var priceInput = $('price');
        var priceType = $('price_type');
        var priceValue = parseFloat(v);

        // Passed on non-related validators conditions (to not change order of validation)
        if(
            !priceInput
            || Validation.get('IsEmpty').test(v)
            || !Validation.get('validate-number').test(v)
        ) {
            return true;
        }
        /*if(priceType) {
            return (priceType && priceValue <= 99.99);
        }*/
        return priceValue < parseFloat($F(priceInput));
});