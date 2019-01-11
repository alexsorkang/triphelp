class Api::TripsController < ApplicationController
  def index
    @trips = Trip.all
    render json: @trips.to_json
  end

  def show
    @trip = Trip.find(params[:id])
    render json: @trip.to_json
  end
end