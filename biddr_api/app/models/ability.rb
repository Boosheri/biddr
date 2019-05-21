# frozen_string_literal: true

class Ability
  include CanCan::Ability

  def initialize(user)
    
    user ||= User.new
    
    alias_action :create, :read, :update, :destroy, :delete, to: :crud
  end
  
  can(:crud, Auction) do |auction|
    auction.user == user
  end
  
  can(:crud, Answer) do |bid|
    bid.user == user || bid.question.user == user
  end
  
end
