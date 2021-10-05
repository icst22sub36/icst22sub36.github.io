#!/bin/bash

rm -rf compiledTests/src
cp -rf src compiledTests
cp tests/test262/harness/harness.js compiledTests/src