import React, { Component, Fragment } from 'react';
import {InputForm, TextInfo } from 'components';
import './styles.scss';

class Home extends Component {
  state = {
    palindrome: '',
    palindromeResult: '',
    calc: '',
    calcLeft: null,
    result: []
  };

  handlePalindrome = (e) => {
    let valueText = e.target.value;
    this.setState({
      [e.target.name]: valueText
    });

    let len = Math.floor(valueText.length / 2);
    for (let i = 0; i < len; i++) {
      if (valueText[i] !== valueText[valueText.length - i - 1]) {
        this.setState({
          palindromeResult: 'Is not palindrome'
        })
      } else {
        this.setState({
          palindromeResult: 'Is palindrome'
        })
      }
    }
  };

  handleCalculatorFraction = (e) => {
    let value = e.target.value;
    this.setState({ 
      [e.target.name]: value,
      calcLeft: null, 
      result: [],
    });
    const listFractions = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100];
    let intValue = parseInt(value);
    let temp = [];
    let result = [];

    while (intValue >= 99) {
      for (let i = 0; i < listFractions.length; i++) {
        if (intValue >= listFractions[i]) {
          temp[listFractions[i]] = temp[listFractions[i]] ? temp[listFractions[i]] + 1 : 1;
          intValue = intValue - listFractions[i];
        };
      };
    };

    let resArr = temp.length - 1;
    temp.forEach((val, key) => {
      result[resArr] = { money: key, total: val };
      resArr--;
    });

    console.log(result);
    this.setState({ calcLeft: intValue, result: result });
  };

  render() {
    const {
      handlePalindrome,
      handleCalculatorFraction,
      state : { 
        palindrome, 
        calc, 
        palindromeResult,
        calcLeft,
        result,
       }
    } = this;
    
    return (
      <div className='p-home'>
        <div className='container'>
          <div className='home-wrapper'>
            <div className='palindrome'>
              <h1>Palindrome</h1>
              <InputForm 
                id='palindrome'
                value={palindrome}
                name='palindrome'
                placeholder='Palindrome'
                onChange={handlePalindrome}
                type='text'
              />
              <div className='palindrome-result'>
                <TextInfo>Result : {palindromeResult}</TextInfo>
              </div>
            </div>
            <div className='calc-fraction'>
              <h1>Calculator Fraction</h1>
              <InputForm 
                id='calc'
                value={calc}
                name='calc'
                placeholder='Calculator Fraction'
                type='text'
                onChange={handleCalculatorFraction}
              />
              <table className='calc-result'>
                {result.map((val, idx) => (
                  <Fragment key={idx}>
                    <tr>
                      <td>
                        <TextInfo>Money Result: {val.money}</TextInfo>
                      </td>
                      <td>
                        <TextInfo>Total Result: {val.total}</TextInfo>
                      </td>
                    </tr>
                  </Fragment>
                ))}
                <TextInfo>Left: {calcLeft}</TextInfo>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
