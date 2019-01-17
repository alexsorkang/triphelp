module Google
  class Maps
    def api_key
      Rails.application.credentials.google[:secret_key]
    end
  end
end