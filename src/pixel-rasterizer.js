class PixelRasterizer {
  constructor() { }

  rasterizeOne(ctx, color, x, y) {
    ctx.putImageData('', x, y);
  }
}


export default PixelRasterizer;
