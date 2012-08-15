REPORTER = spec
TESTS = $(wildcard test/test.*.js)

test:
	@NODE_ENV=test ./node_modules/.bin/mocha $(TESTS) --growl --reporter $(REPORTER)

.PHONY: test