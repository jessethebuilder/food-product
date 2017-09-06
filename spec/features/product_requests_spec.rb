require 'rails_helper'

describe 'Product Requests', type: :feature, js: true do
  let!(:p){ create :product }

  describe 'Attributes' do
    describe ':name' do
      it 'should appear on the page (in a .product)' do
        visit '/products'
        page.find('.product [name=name]').value.should == p.name
      end

      it 'should update after blur' do
        # name = 'A New Name'
        # visit '/products'
        # fill_in 'Name', with: name
        #
        # visit '/products'
        # p.name.should == name
        #
      end
    end

  end
end
