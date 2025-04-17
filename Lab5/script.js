document.addEventListener("DOMContentLoaded", function () {
    const billInput = document.getElementById("billTotal");
    const tipSlider = document.getElementById("tipSlider");
    const tipOutput = document.getElementById("tipValue");
    const totalWithTax = document.getElementById("totalWithTax");
    const currency = document.getElementById("currency");
    const tipAmount = document.getElementById("tipAmount");
    const totalWithTip = document.getElementById("totalWithTip");
    const error = document.getElementById("error");
  
    const TAX_RATE = 0.11;
    const RATES = {
      usd: 1,
      inr: 85,
      eur: 0.95,
    };
  
    function validateBill(value) {
      const number = parseFloat(value);
      return !isNaN(number) && number >= 0;
    }
  
    function calculate() {
      const billValue = billInput.value.trim();
  
      if (!validateBill(billValue)) {
        error.textContent = "Please enter a valid non-negative number.";
        tipAmount.value = "";
        totalWithTip.value = "";
        totalWithTax.value = "";
        return;
      }
  
      const bill = parseFloat(billValue);
      const tipPercent = parseFloat(tipSlider.value);
      const selectedCurrency = currency.value;
  
      tipOutput.textContent = tipPercent;
  
      if (bill === 0) {
        tipAmount.value = "";
        totalWithTip.value = "";
        totalWithTax.value = "";
        error.textContent = "";
        return;
      }
  
      const tip = (bill * tipPercent) / 100;
      const billWithTip = bill + tip;
      const billWithTax = bill + (bill * TAX_RATE);
  
      const rate = RATES[selectedCurrency] || 1;
      const convertedTip = (tip * rate).toFixed(2);
      const convertedTotal = ((billWithTip + (bill * TAX_RATE)) * rate).toFixed(2);
  
      tipAmount.value = convertedTip;
      totalWithTip.value = convertedTotal;
      totalWithTax.value = billWithTax.toFixed(2);
  
      error.textContent = "";
    }
  
    billInput.addEventListener("input", calculate);
    tipSlider.addEventListener("input", calculate);
    currency.addEventListener("change", calculate);
  });
  