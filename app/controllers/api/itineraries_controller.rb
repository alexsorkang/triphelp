class Api::ItinerariesController < ApplicationController
  before_action :authenticate_user!
  def index
    @trips = current_user.itineraries
    render json: @trips.to_json
  end

  def show
    itinerary = Itinerary.joins(sections: :places).select(:name, :id, :section_order).where(id:params[:id]).first
    @response = itinerary.as_json
    sections = []
    itinerary.sections.find(itinerary.section_order).each do |section|
      places = []
      conv = section.as_json
      section.places.find(section.place_order).each do |place|
        places.push(place)
      end
      conv['places'] = places
      sections.push(conv)
    end
    @response['sections'] = sections
    render json: @response.to_json
  end

  def update
    # @trip = Trip.find(params[:id])
    # render json: @trip.to_json
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