class CreateBids < ActiveRecord::Migration[5.2]
  def change
    create_table :bids do |t|
      t.integer :bid_value

      t.timestamps
    end
  end
end
