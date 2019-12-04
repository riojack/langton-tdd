class PixelRasterizer {
  constructor() { }

  rasterizeOne(ctx, color, x, y) {
    const pixel = [
      color.r, color.g, color.b, color.a
    ];
    const imageData = ctx.createImageData(1, 1);
    imageData.data = pixel;
    
    ctx.putImageData(imageData, x, y);
  }
}

export default PixelRasterizer;
