# Build and push the three service images to GitHub Container Registry (ghcr.io).
#
# One-time setup:
#   export GHCR_USER=your-github-username
#   export GHCR_TOKEN=a GitHub PAT with the write:packages scope
#   make login
#
# Common usage:
#   make release                      # build + push all three, tagged :latest and :<git-sha>
#   make release TAG=v1.2.0           # also tag/push :v1.2.0
#   make build-backend                # just one service
#   make release OWNER=someone-else   # push under a different GHCR namespace
#
# NEXT_PUBLIC_API_URL / VITE_API_URL are baked into the client/admin bundles at
# BUILD time (not read at container startup), so point them at your real
# production backend URL when building for production:
#   make release NEXT_PUBLIC_API_URL=https://api.yourdomain.com VITE_API_URL=https://api.yourdomain.com

REGISTRY ?= ghcr.io
OWNER    ?= m-afnan2018
NAME     ?= yasashvi-ecogreen
TAG      ?= latest
SHA      := $(shell git rev-parse --short HEAD 2>/dev/null || echo local)

VITE_API_URL        ?= https://api.yasashviecogreen.com 
NEXT_PUBLIC_API_URL ?= https://api.yasashviecogreen.com 

BACKEND := $(REGISTRY)/$(OWNER)/$(NAME)-backend
ADMIN   := $(REGISTRY)/$(OWNER)/$(NAME)-admin
CLIENT  := $(REGISTRY)/$(OWNER)/$(NAME)-client

.PHONY: help login \
	build build-backend build-admin build-client \
	push push-backend push-admin push-client \
	release clean

help:
	@echo "Targets:"
	@echo "  make login          - docker login to $(REGISTRY) (needs GHCR_USER + GHCR_TOKEN env vars)"
	@echo "  make build          - build all three images (tags: $(TAG) and $(SHA))"
	@echo "  make push           - push all three images"
	@echo "  make release        - build + push all three"
	@echo "  make clean          - remove locally built images"
	@echo "  make build-backend / build-admin / build-client   - single service"
	@echo "  make push-backend / push-admin / push-client      - single service"
	@echo ""
	@echo "Override registry/owner/tag, e.g.: make release OWNER=someone TAG=v1.2.0"

login:
	@test -n "$$GHCR_TOKEN" || (echo "Set GHCR_TOKEN (a GitHub PAT with write:packages) first" && exit 1)
	@test -n "$$GHCR_USER" || (echo "Set GHCR_USER (your GitHub username) first" && exit 1)
	echo "$$GHCR_TOKEN" | docker login $(REGISTRY) -u "$$GHCR_USER" --password-stdin

build-backend:
	docker build -t $(BACKEND):$(TAG) -t $(BACKEND):$(SHA) ./server

build-admin:
	docker build \
		--build-arg VITE_API_URL=$(VITE_API_URL) \
		-t $(ADMIN):$(TAG) -t $(ADMIN):$(SHA) ./admin

build-client:
	docker build \
		--build-arg NEXT_PUBLIC_API_URL=$(NEXT_PUBLIC_API_URL) \
		-t $(CLIENT):$(TAG) -t $(CLIENT):$(SHA) ./client

build: build-backend build-admin build-client

push-backend:
	docker push $(BACKEND):$(TAG)
	docker push $(BACKEND):$(SHA)

push-admin:
	docker push $(ADMIN):$(TAG)
	docker push $(ADMIN):$(SHA)

push-client:
	docker push $(CLIENT):$(TAG)
	docker push $(CLIENT):$(SHA)

push: push-backend push-admin push-client

release: build push

clean:
	-docker rmi $(BACKEND):$(TAG) $(BACKEND):$(SHA)
	-docker rmi $(ADMIN):$(TAG) $(ADMIN):$(SHA)
	-docker rmi $(CLIENT):$(TAG) $(CLIENT):$(SHA)
