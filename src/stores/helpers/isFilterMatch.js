export function isFilterMatch(product, filter) {
  if (filter.color) {
    if (product.color.toLowerCase() !== filter.color.toLowerCase()) return false
  }

  if (filter.size) {
    if (!product.sizes.includes(filter.size)) return false
  }

  if (filter.price) {
    const priceRange = filter.price.split('-')
    const [minPrice, maxPrice] = [priceRange[0], priceRange[1]]
    const productPrice = parseFloat(product?.discount) || parseFloat(product.price)

    if (productPrice < minPrice || productPrice > maxPrice) return false
  }

  return true
}
