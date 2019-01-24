module GoogleApi
  class Maps
    def api_key
      Rails.application.credentials.google[:secret_key]
    end
    def test
      @client = GooglePlaces::Client.new("AIzaSyCNmXaxE50W4Ln2WHcVIOOcrkDoh-AXedM")
      @client = GooglePlaces::Client.new(api_key)
      first = @client.spots_by_query('Koreatown Los Angeles CA', :types => ['restaurant'], :multipage => true)
      a = first.pluck(:name)
      second = @client.spots_by_pagetoken(first[-1].nextpagetoken)
    end
    


  end
end