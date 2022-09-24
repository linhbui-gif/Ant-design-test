import React, { useEffect } from 'react';

import { InputNumber, Slider } from 'antd';

import './SliderRange.scss';

const SliderRange = ({ min, max, value, onChange }) => {
  const currentValue = value || [min, max];
  const [fromValue, toValue] = currentValue;

  const handleSliderChange = (changedValue) => {
    onChange?.(changedValue);
  };

  const handleInputNumberChange = (changedValue, target) => {
    if (target === 'from') {
      onChange?.([changedValue, toValue]);
    }

    if (target === 'to') {
      onChange?.([fromValue, changedValue]);
    }
  };

  return (
    <div className="SliderRange">
      <div className="SliderRange-inputs flex items-center justify-between">
        <InputNumber
          value={fromValue}
          min={min}
          max={toValue}
          onChange={(changedValue) => handleInputNumberChange(changedValue, 'from')}
        />
        <span className="SliderRange-inputs-dash">-</span>
        <InputNumber
          value={toValue}
          min={fromValue}
          max={max}
          onChange={(changedValue) => handleInputNumberChange(changedValue, 'to')}
        />
      </div>

      <div className="SliderRange-slider">
        <Slider range onChange={handleSliderChange} min={min} max={max} value={currentValue} />
      </div>
    </div>
  );
};

export default SliderRange;
