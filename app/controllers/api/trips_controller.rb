class Api::TripsController < ApplicationController
  def index
    @trips = Trip.all
    render json: @trips.to_json
  end

  def show
    @trip = Trip.find(params[:id])
    render json: @trip.to_json
  end

  def search_results
    params = 'Koreatown Los Angeles CA'
    @client = GooglePlaces::Client.new(Rails.application.credentials.google[:secret_key])
    # first = @client.spots_by_query(params, :types => ['restaurant'], :multipage => true)
    first = @client.spots_by_query(params, :types => ['restaurant'])
    search_names = first.pluck(:name)
    render json: search_names.to_json
    # second = @client.spots_by_pagetoken(first[-1].nextpagetoken)
  end
end