class PagesController < ApplicationController
  def index
  end

  def me
    @user = authenticated_resource_owner
  end
end
