# Variables
BUILD_DIR = build              # Directory where the build output is located
CNAME_PATH = build/CNAME
DOMAIN = culambdas.com         # Domain name for the CNAME file

# Default target (runs when `make` or `npm run deploy` is called)
all: deploy

# Build the project by running the prebuild script and React build
build:
	node src/prebuild.js           # Run the prebuild script
	npx react-scripts build            # Build the React app

create-cname:
	@echo "$(DOMAIN)" > $(CNAME_PATH)        # Write the domain to the CNAME file in the subfolder
	@echo "CNAME file created with domain: $(DOMAIN) at $(CNAME_PATH)"

deploy: build create-cname
	gh-pages -d $(BUILD_DIR)
# Optional: Clean the build directory
clean:
	rm -rf $(BUILD_DIR)            # Remove the build directory
	@echo "Cleaned the build directory."
