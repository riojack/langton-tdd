class PixelRasterizer {
  constructor() { }
  icebreaker() {
    return 'hello, world!';
  }

  rasterizeOne(ctx, color, x, y) {
    ctx.putImageData('', x, y);
  }
}


export default PixelRasterizer;
