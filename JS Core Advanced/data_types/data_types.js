function task(number) {
    if(number == 0) return 1;
  
    return Math.ceil(Math.log10(Math.abs(number) + 1));
}
