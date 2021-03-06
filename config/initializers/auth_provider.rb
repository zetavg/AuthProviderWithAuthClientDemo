AuthProvider.configure do
  # Set the default type of the resource owner
  default_resource_owner_type "User"

  # This block will be called to get the authenticated resource owner
  # by his/her credentials
  resource_owner_from_credentials do |type, username, password|
    # Put the resource owner authentication logic here.
    #
    # The "type" parameter is the resource owner type specified by the request
    # or the default_resource_owner_type if not specified.
    #
    # Example implementation:
    #
    # resource_owner_class = case type
    # when "User"
    #   User
    # when "AdminUser"
    #   AdminUser
    # end
    # resource_owner = resource_owner_class.find_for_database_authentication(email: username)
    # if resource_owner.valid_password?(password)
    #   resource_owner
    # else
    #   nil
    # end
    encrypted_password = Digest::MD5.hexdigest(password)
    User.find_by(username: username, encrypted_password: encrypted_password)
  end

  # Access token expiration time (defaults to 2 hours)
  access_token_expires_in 65.seconds
end
