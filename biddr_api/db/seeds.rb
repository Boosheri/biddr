PASSWORD = "supersecret"
Bid.delete_all
Auction.delete_all
User.delete_all

super_user = User.create(
    first_name: "Jon",
    last_name: "Snow",
    email: "js@winterfell.gov",
    password: PASSWORD
  )


10.times do
    first_name = Faker::Name.first_name
    last_name = Faker::Name.last_name
    User.create(
        first_name: first_name,
        last_name: last_name,
        email: "#{first_name.downcase}.#{last_name.downcase}@example.com",
        password: PASSWORD
    )
end


users = User.all

200.times do
    created_at = Faker::Date.backward(365 * 5)
    a = Auction.create(
      # Faker is ruby module. We are just accessing
      # the class Hacker inside the module Faker
      title: Faker::Hacker.say_something_smart,
      description: Faker::ChuckNorris.fact,
      current_price: rand(100_000),
      reserve_price: rand(100_000),
      ends_at: created_at,
      created_at: created_at,
      updated_at: created_at,
      user: users.sample
    )

    if a.valid?
        a.bids = rand(0..15).times.map do
          Bid.new(bid_value: rand(100_000), user: users.sample)
        end
    end
end
  
auctions = Auction.all
bids = Bid.all


puts("Generated #{ auctions.count } auctions")
puts("Generated #{ bids.count } bids")
puts("Generated #{ users.count } users")
puts("Login with #{super_user.email} and password: #{PASSWORD}")
