class CreateShows < ActiveRecord::Migration
  def change
    create_table :shows do |t|
      t.datetime :start_time
      t.datetime :end_time
      t.string :venue
      t.string :address
      t.string :ticket_link
      t.text :description
      t.string :city

      t.timestamps
    end
  end
end
