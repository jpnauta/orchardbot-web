# orchardbot-web

*Web application for Orchardbot, the robot who can turn on a tap*

## Pre-requisities

- Node.js >= 6

## Getting Started

To install the required dependencies, simply run this command

```
npm install -g gulp  # Gulp CLI
npm install -g polymer-cli  # Polymer CLI
npm install  # NPM dependencies
```

## Development

This command will start a local development server

```
gulp serve
```

## Testing

Use this command to run all tests

```
gulp test
```

## Deploying

To build a production-ready version of this project, run this command

```
gulp build
```

The contents of `build/es5-bundled` can be exported and ran using
the command

```
polymer serve
```

