
set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

activate :blog do |blog|
   blog.permalink = "blog/{year}/{title}.html"
   blog.paginate = true
   blog.page_link = "p{num}"
   blog.per_page = 20
   # Time.zone = "Toronto"
end

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

activate :deploy do |deploy|
  deploy.method = :git
  # Optional Settings
  # deploy.remote   = 'agreenbloom.github.io' # remote name or git url, default: origin
  deploy.branch   = 'master' # default: gh-pages
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
  # deploy.commit_message = 'custom-message'      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
end
