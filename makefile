docs:
	yarn vitepress dev document

lint:
	yarn prettier --write .

install:
	yarn install

build:
	yarn rollup -c rollup.config.js

test:
	yarn cypress run

clean:
	rm -rf /node_modules
	rm -rf /dist

release:
	yarn conventional-changelog -p angular -i CHANGELOG.md -s

install-examples:
	node scripts/walk examples yarn install

build-examples:
	node scripts/walk examples yarn build

test-examples:
	yarn jest --coverage ./examples

clean-examples:
	node scripts/walk examples rm -rf node_modules
	node scripts/walk examples rm -rf dist
