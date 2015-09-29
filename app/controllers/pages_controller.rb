class PagesController < ApplicationController
  def home
  	@shows = Show.all.order("start_time ASC")
  end
end
