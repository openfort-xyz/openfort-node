.PHONY: update-openapi check-openapi generate-client help

# OpenAPI spec URLs with timestamp for cache-busting
TIMESTAMP := $(shell date +%s)
OPENAPI_MAIN_URL := http://localhost:3000/api-docs/swagger.json?timestamp=$(TIMESTAMP)
OPENAPI_AUTH_URL := http://localhost:3000/iam/v2/auth/reference?timestamp=$(TIMESTAMP)
OPENAPI_MAIN_LOCAL := openapi.json
OPENAPI_AUTH_LOCAL := openapi-auth.json
OPENAPI_MAIN_TEMP := openapi.json.new
OPENAPI_AUTH_TEMP := openapi-auth.json.new

help:
	@echo "Available commands:"
	@echo "  make update-openapi    - Download the latest OpenAPI specs (main + auth)"
	@echo "  make check-openapi     - Check if newer OpenAPI specs are available"
	@echo "  make generate-client   - Generate the TypeScript client from the specs"

# Generate the TypeScript client using Orval
generate-client:
	@echo "Generating TypeScript client..."
	@pnpm orval --config orval.config.ts
	@echo "Client generated successfully!"

# Download all OpenAPI specs
update-openapi:
	@echo "Downloading OpenAPI specs..."
	@MAIN_UPDATED=0; AUTH_UPDATED=0; \
	curl -s -o $(OPENAPI_MAIN_TEMP) "$(OPENAPI_MAIN_URL)"; \
	curl -s -o $(OPENAPI_AUTH_TEMP) "$(OPENAPI_AUTH_URL)"; \
	if [ ! -f $(OPENAPI_MAIN_LOCAL) ] || ! cmp -s $(OPENAPI_MAIN_TEMP) $(OPENAPI_MAIN_LOCAL); then \
		mv $(OPENAPI_MAIN_TEMP) $(OPENAPI_MAIN_LOCAL); \
		echo "Main API spec updated."; \
		MAIN_UPDATED=1; \
	else \
		rm $(OPENAPI_MAIN_TEMP); \
		echo "Main API spec is already up to date."; \
	fi; \
	if [ ! -f $(OPENAPI_AUTH_LOCAL) ] || ! cmp -s $(OPENAPI_AUTH_TEMP) $(OPENAPI_AUTH_LOCAL); then \
		mv $(OPENAPI_AUTH_TEMP) $(OPENAPI_AUTH_LOCAL); \
		echo "IAM v2 auth spec updated."; \
		AUTH_UPDATED=1; \
	else \
		rm $(OPENAPI_AUTH_TEMP); \
		echo "IAM v2 auth spec is already up to date."; \
	fi

# Check if newer OpenAPI specs are available (returns exit code 1 if update available)
check-openapi:
	@echo "Checking for OpenAPI updates..."
	@NEEDS_UPDATE=0; \
	curl -s -o $(OPENAPI_MAIN_TEMP) "$(OPENAPI_MAIN_URL)"; \
	curl -s -o $(OPENAPI_AUTH_TEMP) "$(OPENAPI_AUTH_URL)"; \
	if [ ! -f $(OPENAPI_MAIN_LOCAL) ]; then \
		echo "Main API spec not found locally."; \
		NEEDS_UPDATE=1; \
	elif ! cmp -s $(OPENAPI_MAIN_TEMP) $(OPENAPI_MAIN_LOCAL); then \
		echo "A newer main API spec is available."; \
		NEEDS_UPDATE=1; \
	else \
		echo "Main API spec is up to date."; \
	fi; \
	if [ ! -f $(OPENAPI_AUTH_LOCAL) ]; then \
		echo "IAM v2 auth spec not found locally."; \
		NEEDS_UPDATE=1; \
	elif ! cmp -s $(OPENAPI_AUTH_TEMP) $(OPENAPI_AUTH_LOCAL); then \
		echo "A newer IAM v2 auth spec is available."; \
		NEEDS_UPDATE=1; \
	else \
		echo "IAM v2 auth spec is up to date."; \
	fi; \
	rm -f $(OPENAPI_MAIN_TEMP) $(OPENAPI_AUTH_TEMP); \
	if [ $$NEEDS_UPDATE -eq 1 ]; then \
		echo "Run 'make update-openapi' to update."; \
		exit 1; \
	fi
