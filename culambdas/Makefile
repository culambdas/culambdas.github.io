# Variables
BUILD_DIR = build              # Directory where the build output is located
CNAME_PATH = build/CNAME
DOMAIN = culfe.com
# Domain name for the CNAME file

# Default target (runs when `make` or `npm run deploy` is called)
all: deploy

# Build the project by running the prebuild script and React build
build:
	node src/prebuild.js
	NODE_OPTIONS=--openssl-legacy-provider npx react-scripts build

# Write the domain to the CNAME file in the subfolder
create-cname:
	@echo $(DOMAIN) > $(CNAME_PATH)
	@echo "CNAME file created with domain: $(DOMAIN) at $(CNAME_PATH)"

deploy: build create-cname
	gh-pages -d $(BUILD_DIR)
# Optional: Clean the build directory

# Remove the build directory
clean:
	rm -rf $(BUILD_DIR)
	@echo "Cleaned the build directory."
