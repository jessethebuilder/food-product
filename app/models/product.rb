class Product
  include Mongoid::Document

  field :name, type: String
  validates :name, presence: true, uniqueness: true

  field :description, type: String

  field :price, type: Float
  validates :price, presence: true, numericality: {greater_than: 0}
end
