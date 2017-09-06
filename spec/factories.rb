FactoryGirl.define do
  sequence(:name){ |n| "#{Faker::Pokemon.name} #{n}" }
  
  factory :product do
    name
    price Random.rand(0.99..100)
  end
end
