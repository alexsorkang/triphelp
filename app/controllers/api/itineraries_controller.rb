class Api::ItinerariesController < ApplicationController
  before_action :authenticate_user!
  def index
    @trips = current_user.itineraries
    render json: @trips.to_json
  end

  def show
    @trip = Itinerary.find(params[:id])
    render json: @trip.to_json
  end

  def update
    # @trip = Trip.find(params[:id])
    # render json: @trip.to_json
  end

  def search_results
    # query = 'Koreatown Los Angeles CA'
    query = params[:query]
    @client = GooglePlaces::Client.new(Rails.application.credentials.google[:secret_key])
    # first = @client.spots_by_query(params, :types => ['restaurant'], :multipage => true)
    first = @client.spots_by_query(query, :types => ['restaurant'])
    # search_names = first
    render json: first.to_json
    # second = @client.spots_by_pagetoken(first[-1].nextpagetoken)
  end
end