import { getProducts } from '../app/lib/getProducts';

describe('getProducts', () => {
  it('should fetch products successfully', async () => {
    const products = await getProducts();
    expect(Array.isArray(products)).toBe(true);
  });

  it('should throw an error for invalid response format', async () => {
    // Mock fetch to return invalid data
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({}),
      })
    ) as jest.Mock;

    await expect(getProducts()).rejects.toThrow('Invalid response format: Expected an array');
  });
});