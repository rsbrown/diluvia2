# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :diluvia,
  ecto_repos: [Diluvia.Repo]

# Configures the endpoint
config :diluvia, DiluviaWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "YGE/fK/je+Y9PNErDtx68qP4jIlu7wHOREBt0JLAd7dqSiqB+kl+xAAi78UaHMUe",
  render_errors: [view: DiluviaWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Diluvia.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
