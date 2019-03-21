class Api::ItinerariesController < ApplicationController
  before_action :authenticate_user!
  def index
    @trips = current_user.itineraries
    render json: @trips.to_json
  end

  def show
    response = Itinerary.itinerary_json(params[:id])
    render json: response
  end

  def update
    # @trip = Trip.find(params[:id])
    # render json: @trip.to_json
  end

  def drag_place
    # {"id"=>"3", "src"=>"5", "dest"=>"5", "src_order"=>["14", "13", "15"], "dest_order"=>["14", "13", "15"], place=>"1"
    @trip = Itinerary.find(params[:id])
    src = @trip.sections.find(params[:src])
    place = src.places.find(params[:place])
    place.update_attributes(section_id: params[:dest])
    dest = @trip.sections.find(params[:dest])
    src.update_attributes(place_order: params[:src_order])
    dest.update_attributes(place_order: params[:dest_order])
    response = Itinerary.itinerary_json(params[:id])
    render json: response
  end

  def drag_section
    @trip = Itinerary.find(params[:id])
    @trip.update_attributes(section_order: params[:order])
    response = Itinerary.itinerary_json(params[:id])
    render json: response
  end

  def search_results
    # query = 'Koreatown Los Angeles CA'
    query = params[:query]
    @client = GooglePlaces::Client.new(Rails.application.credentials.google[:secret_key])
    first = @client.spots_by_query(query, :types => ['restaurant'])
    first = JSON.parse(first.to_json)
    google_keys = %w(name place_id id lng lat formatted_address rating address_components street_number street city region postal_code country)
    first = first.map do |a|
      a['id'] += Time.now.to_i.to_s
      a.reject { |x| !google_keys.include?(x.to_s) }
    end
    render json: first.to_json
    # second = @client.spots_by_pagetoken(first[-1].nextpagetoken)
  end
end