"use strict";
function demo(range) {
    let status = range.closest('.demo__item').find('input[type="number"]');
    let model = range.data('controller')._model;
    function setValue(element, value) {
        element['prop']('value', value);
        element['attr']('value', value);
    }
    status.on('input', e => {
        let [start, stop] = [status.eq(0).prop('value'), status.eq(1).prop('value')];
        if (model.ghost && stop) {
            setValue(model.ghost, stop);
        }
        if (start) {
            setValue(range, start);
        }
        model.followProperty();
        model.updateProperty();
    });
    range.add(model.ghost ? model.ghost : '').on('input', e => {
        if (model.direction === 1) {
            setValue(status.eq(0), model.valueLow.toString());
            setValue(status.eq(1), model.valueHight.toString());
        }
        else if (model.direction === 2) {
            setValue(status.eq(0), model.valueLow.toString());
        }
        else {
            setValue(status.eq(0), model.valueHight.toString());
        }
    });
    range.add(model.ghost ? model.ghost : '').triggerHandler("input");
}
//# sourceMappingURL=demo.js.map