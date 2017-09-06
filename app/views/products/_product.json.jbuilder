json.id product.to_param
json.extract! product, :name, :description, :price
json.url product_url(product, format: :json)
