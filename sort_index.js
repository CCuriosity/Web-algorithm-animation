const WIDTH = 900;
const HEIGHT = 320;
const MAX_LENGTH = Math.floor(WIDTH / 22.5);

class RectPaint {
  constructor() {
    this.ctx = document.querySelector('canvas').getContext('2d');
    this.sortArr = [];
    this.renderQueue = [];
    this.jiaohuan=[];
    this.b=0;
  }

  draw(array, colors = {}) {
    this.ctx.clearRect(0, 0, WIDTH, HEIGHT);  
    array = array.slice(0, MAX_LENGTH);
    const offset = Math.floor((WIDTH - array.length * 22.5) / 2);
    for (let i = 0; i < array.length; i++) {
      this.ctx.fillStyle = '#888';
      this.ctx.fillText(array[i], i * 22.5 + offset + 2, HEIGHT - array[i] - 5)
      this.ctx.fillStyle = colors[i] || '#81a577';
      this.ctx.fillRect(i * 22.5 + offset, HEIGHT - array[i], 20, array[i]);
    }
  }

  left_in(nn){
    this.sortArr.push(Number(nn));
    this.draw(this.sortArr);
  }
  geratorRandomArr() {
    const arr = this._geratorRandomArr(Math.floor(900 / 22.5));
    this.sortArr = arr;
    this.stopAnimate();
    this.draw(arr);  
  }

  sort(sortFn, speed) {
    if (this.timer) return;
    sortFn(this.sortArr, this);
    this.beginAnimate(speed)
  }

  beginAnimate(speed) {
    this.timer = setInterval(() => {
      if (!this.renderQueue.length) {
        this.stopAnimate();
        return;
      }
      const { data, colors,b,a} = this.renderQueue.shift();
      if(b==1){
        output(`> "${a[0]}" 和 "${a[1]}" 交换！`)
      }
      this.draw(data, colors);
      this.b=1;

    }, speed)
  }
  changespeed(speed) {
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (!this.renderQueue.length) {
        this.stopAnimate();
        return;
      }
      const { data, colors,b,a} = this.renderQueue.shift();
      if(b==1){
        output(`> "${a[0]}" 和 "${a[1]}" 交换！`)
      }
      this.draw(data, colors);this.b=1;
    }, speed)
  }


  stopAnimate() {
    clearInterval(this.timer);
    this.renderQueue = [];
    this.timer = null;
    this.draw(this.sortArr);
  }

  clearCanvas() {
    this.sortArr=[];
    this.renderQueue = [];
    this.jiaohuan=[];
    this.ctx.clearRect(0, 0, WIDTH, HEIGHT);
  }

  addAnimateData(data) {
    this.renderQueue.push(data);
  }

  ssswitch(data){
    this.jiaohuan.push(data)
  }

  // 生成随机高度的柱形数组
  _geratorRandomArr(len) {
    let arr = [];
    for (let i = 0; i < len; i++) {
      const height = Math.floor(Math.random() * 29 + 1) * 10;
      arr.push(height)
    }
    return arr;
  }
}



