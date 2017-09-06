Product.destroy_all

50.times do
  p = Product.new(name: Faker::Pokemon.name, description: Faker::Lorem.sentence, price: Random.rand(0.20..1000).round(2))
  p.save
end

puts "Product Count: #{Product.count}"
