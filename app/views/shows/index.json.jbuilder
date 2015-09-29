json.array!(@shows) do |show|
  json.extract! show, :id, :start_time, :end_time, :venue, :address, :ticket_link, :description, :city
  json.url show_url(show, format: :json)
end
