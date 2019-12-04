import PixelRasterizer from '../../src/pixel-rasterizer';

describe('Pixel Rasterizer', () => {
  test('puts image data at the given x,y coordinates', () => {
    const fakeContext = {
      createImageData: jest.fn().mockReturnValueOnce({ data: [], height: 0, width: 0 }),
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

  test('puts 1-by-1 pixel image data with the given color data', () => {
    const fakeContext = {
      createImageData: jest.fn().mockReturnValueOnce({ data: [], height: 0, width: 0 }),
      putImageData: jest.fn()
    };

    const rasterizer = new PixelRasterizer();
    const color = {
      r: 5,
      g: 6,
      b: 7,
      a: 255
    };

    rasterizer.rasterizeOne(fakeContext, color, 0, 0);

    const [[imageData]] = fakeContext.putImageData.mock.calls;
    const { data } = imageData;

    expect(fakeContext.createImageData).toHaveBeenCalledWith(1, 1);
    expect(data).toEqual([
      color.r,
      color.g,
      color.b,
      color.a
    ]);
  });
});
