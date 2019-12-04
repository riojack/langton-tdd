import PixelRasterizer from '../../src/pixel-rasterizer';

const COLOR = { r: 5, g: 6, b: 7, a: 255 };

describe('Pixel Rasterizer', () => {
  let fakeContext, rasterizer;

  beforeEach(() => {
    fakeContext = {
      createImageData: jest.fn().mockReturnValueOnce({ data: [], height: 0, width: 0 }),
      putImageData: jest.fn()
    };

    rasterizer = new PixelRasterizer();
  });

  test('puts image data at the given x,y coordinates', () => {
    const x = 15;
    const y = 19;

    rasterizer.rasterizeOne(fakeContext, COLOR, x, y);

    expect(fakeContext.putImageData).toHaveBeenCalledTimes(1);
    expect(fakeContext.putImageData).toHaveBeenCalledWith(expect.anything(), x, y);
  });

  test('puts 1-by-1 pixel image data with the given color data', () => {
    rasterizer.rasterizeOne(fakeContext, COLOR, 0, 0);

    const [[imageData]] = fakeContext.putImageData.mock.calls;
    const { data } = imageData;

    expect(fakeContext.createImageData).toHaveBeenCalledWith(1, 1);
    expect(data).toEqual([
      COLOR.r,
      COLOR.g,
      COLOR.b,
      COLOR.a
    ]);
  });
});
