# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path.
# Rails.application.config.assets.paths << Emoji.images_path
# Add Yarn node_modules folder to the asset load path.
Rails.application.config.assets.paths << Rails.root.join('node_modules')

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in the app/assets
# folder are already added.
# Rails.application.config.assets.precompile += %w( admin.js admin.css )

Rails.application.config.assets.precompile += %w( front-demo-manifest.js )
Rails.application.config.assets.precompile += %w( front-alpha-grid.js )
Rails.application.config.assets.precompile += %w( front-alpha-chaos.js )
Rails.application.config.assets.precompile += %w( pr-sxsw-manifest.js )
Rails.application.config.assets.precompile += %w( pr-alpha-manifest.js )
Rails.application.config.assets.precompile += %w( ms-manifest.js )
Rails.application.config.assets.precompile += %w( ai-test-manifest.js )
# Rails.application.config.assets.precompile += %w( google-manifest.js )

Rails.application.config.assets.precompile += %w( front-demo.scss )
Rails.application.config.assets.precompile += %w( front-a-grid.scss )
Rails.application.config.assets.precompile += %w( front-a-chaos.scss )
Rails.application.config.assets.precompile += %w( pr-sxsw.scss )
Rails.application.config.assets.precompile += %w( pr-alpha.scss )
Rails.application.config.assets.precompile += %w( media.scss )
