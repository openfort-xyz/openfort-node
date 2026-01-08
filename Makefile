.PHONY: update-openapi check-openapi generate-client help

# OpenAPI spec URL with timestamp for cache-busting
OPENAPI_URL := http://localhost:3000/api-docs/swagger.json?timestamp=$(shell date +%s)
OPENAPI_LOCAL := openapi.json
OPENAPI_TEMP := openapi.json.new

help:
	@echo "Available commands:"
	@echo "  make update-openapi    - Download the latest OpenAPI spec"
	@echo "  make check-openapi     - Check if a newer OpenAPI spec is available"
	@echo "  make generate-client   - Generate the TypeScript client from the spec"

# Generate the TypeScript client using Orval
generate-client:
	@echo "Generating TypeScript client..."
	@pnpm orval --config orval.config.ts
	@echo "Client generated successfully!"

# Download the latest OpenAPI spec
update-openapi:
	@echo "Downloading latest OpenAPI spec from $(OPENAPI_URL)..."
	@curl -s -o $(OPENAPI_TEMP) "$(OPENAPI_URL)"
	@if [ ! -f $(OPENAPI_LOCAL) ] || ! cmp -s $(OPENAPI_TEMP) $(OPENAPI_LOCAL); then \
		mv $(OPENAPI_TEMP) $(OPENAPI_LOCAL); \
		echo "OpenAPI spec updated successfully."; \
	else \
		rm $(OPENAPI_TEMP); \
		echo "OpenAPI spec is already up to date."; \
	fi

# Check if a newer OpenAPI spec is available (returns exit code 1 if update available)
check-openapi:
	@echo "Checking for OpenAPI updates..."
	@curl -s -o $(OPENAPI_TEMP) "$(OPENAPI_URL)"
	@if [ ! -f $(OPENAPI_LOCAL) ]; then \
		echo "OpenAPI spec not found locally. Run 'make update-openapi' to download."; \
		rm -f $(OPENAPI_TEMP); \
		exit 1; \
	elif ! cmp -s $(OPENAPI_TEMP) $(OPENAPI_LOCAL); then \
		echo "A newer OpenAPI spec is available. Run 'make update-openapi' to update."; \
		rm $(OPENAPI_TEMP); \
		exit 1; \
	else \
		echo "OpenAPI spec is up to date."; \
		rm $(OPENAPI_TEMP); \
		exit 0; \
	fi
