
function bubbleSort(arr, ctx) {

  // 动画标记
  function mark(arr, end, i, j,b,arrj,arrj1) {
    let colors = {};
    let a={};
    a[0]=arrj;
    a[1]=arrj1;
    for (let i = 0; i < arr.length; i++) {
      if (i >= end) {
        colors[i] = '#965454'
      }
    }
    colors[i] = '#eebd33d9';
    colors[j] = '#eebd33d9';
    
    ctx.addAnimateData({
      data: [...arr],
      colors,
      b,a
    })
  }

  function sswitch(arrj,arrj1){
    ctx.ssswitch(
        {
          arrj,arrj1
        }
    )
  }

  let bool=0,arrj=0,arrj1=0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      mark(arr, arr.length - i, j, j + 1, bool,arrj,arrj1)
      bool=0;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        bool=1;
        arrj=arr[j];
        arrj1=arr[j+1];
      }
    }
  }
  mark(arr, 0, 0, 0, bool,arrj,arrj1)
}

