import PixelRasterizer from '../../src/pixel-rasterizer';

describe('Pixel Rasterizer', () => {
  test('icebreaker returns "hello, world!"', () => {
    const rasterizer = new PixelRasterizer();
    expect(rasterizer.icebreaker())
      .toBe('hello, world!');
  });
});
