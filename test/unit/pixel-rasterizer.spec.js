import PixelRasterizer from '../../src/pixel-rasterizer';

describe('Pixel Rasterizer', () => {
  test('puts image data at the given x,y coordinates', () => {
    const fakeContext = {
      putImageData: jest.fn()
    };

    const rasterizer = new PixelRasterizer();
    const color = {
      r: 5,
      g: 6,
      b: 7,
      a: 255
    };
    const x = 15;
    const y = 19;

    rasterizer.rasterizeOne(fakeContext, color, x, y);

    expect(fakeContext.putImageData).toHaveBeenCalledTimes(1);
    expect(fakeContext.putImageData).toHaveBeenCalledWith(expect.anything(), x, y);
  });
});
