class CreateAuctions < ActiveRecord::Migration[5.2]
  def change
    create_table :auctions do |t|
      t.string :title
      t.text :description
      t.integer :current_price
      t.integer :reserve_price
      t.date :ends_at

      t.timestamps
    end
  end
end
